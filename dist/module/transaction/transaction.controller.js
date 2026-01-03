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
exports.TransactionController = void 0;
const transaction_services_1 = require("./transaction.services");
const createTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield transaction_services_1.TransactionServices.createTransaction(req.body);
        res.json({
            success: true,
            message: 'Transaction created successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to create transaction',
            error: err,
        });
    }
});
const getAllTransactions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield transaction_services_1.TransactionServices.getAllTransactions();
        res.json({
            success: true,
            message: 'Transaction retrived successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
});
exports.TransactionController = {
    createTransaction,
    getAllTransactions,
};
