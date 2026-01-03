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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportServices = void 0;
const accounts_model_1 = require("../accounts/accounts.model");
const transaction_model_1 = require("../transaction/transaction.model");
const getJournalReport = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield transaction_model_1.TransactionModel.find()
            .populate('debitAccount creditAccount')
            .sort({ date: -1 });
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
//  enum: ['Asset', 'Liability', 'Equity', 'Revenue', 'Expense'],
const getBalanceSheet = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accounts = yield accounts_model_1.AccountModel.find();
        const assets = accounts.filter(acc => acc.type === 'Asset');
        const liability = accounts.filter(acc => acc.type === 'Liability');
        const equity = accounts.filter(acc => acc.type === 'Equity');
        const totalAssets = assets.reduce((sum, acc) => sum + acc.balance, 0);
        const totalLiability = liability.reduce((sum, acc) => sum + acc.balance, 0);
        const totalEquity = equity.reduce((sum, acc) => sum + acc.balance, 0);
        return {
            assets,
            liability,
            equity,
            totalAssets,
            totalLiability,
            totalEquity,
            isBalanced: totalAssets === totalLiability + totalEquity,
        };
    }
    catch (err) {
        console.log(err);
    }
});
const getIncomeStatement = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accounts = yield accounts_model_1.AccountModel.find();
        const revenue = accounts.filter(acc => acc.type === 'Revenue');
        const expense = accounts.filter(acc => acc.type === 'Expense');
        const totalRevenue = revenue.reduce((sum, acc) => sum + acc.balance, 0);
        const totalExpense = expense.reduce((sum, acc) => sum + acc.balance, 0);
        return {
            revenue,
            expense,
            netProfit: totalRevenue - totalExpense,
        };
    }
    catch (err) {
        console.log(err);
    }
});
exports.ReportServices = {
    getJournalReport,
    getBalanceSheet,
    getIncomeStatement,
};
