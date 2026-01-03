"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const transaction_model_1 = require("./transaction.model");
const accounts_model_1 = require("../accounts/accounts.model");
const createTransaction = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const { debitAccount, creditAccount, amount } = payload;
        if (amount <= 0) {
            throw new Error('Amount must be greater than zero');
        }
        const debitAcc = yield accounts_model_1.AccountModel.findById(debitAccount).session(session);
        const creditAcc = yield accounts_model_1.AccountModel.findById(creditAccount).session(session);
        if (!debitAcc || !creditAcc) {
            throw new Error('Account not found');
        }
        if (debitAcc.balance < amount) {
            throw new Error('Insufficient balance in debit account');
        }
        const newTransaction = yield transaction_model_1.TransactionModel.create([payload], { session });
        yield accounts_model_1.AccountModel.findByIdAndUpdate(debitAccount, { $inc: { balance: -amount } }, { session, new: true });
        yield accounts_model_1.AccountModel.findByIdAndUpdate(creditAccount, { $inc: { balance: amount } }, { session, new: true });
        yield session.commitTransaction();
        session.endSession();
        return newTransaction[0];
    }
    catch (err) {
        yield session.abortTransaction();
        session.endSession();
        console.log(err);
        throw err;
    }
});
const getAllTransactions = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield transaction_model_1.TransactionModel.find()
        .populate('debitAccount')
        .populate('creditAccount')
        .sort({ date: -1 });
});
exports.TransactionServices = {
    createTransaction,
    getAllTransactions,
};
