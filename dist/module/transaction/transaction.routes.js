"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionRoute = void 0;
const express_1 = require("express");
const transaction_controller_1 = require("./transaction.controller");
const router = (0, express_1.Router)();
router.post('/create-transaction', transaction_controller_1.TransactionController.createTransaction);
router.get('/transactions', transaction_controller_1.TransactionController.getAllTransactions);
exports.transactionRoute = router;
