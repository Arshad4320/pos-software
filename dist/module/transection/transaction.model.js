"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModel = void 0;
const mongoose_1 = require("mongoose");
const transactionSchema = new mongoose_1.Schema({
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    transactionType: {
        type: String,
        required: true,
        enum: ['Sales', 'Purchase', 'Receipt', 'Payment'],
    },
    debitAccount: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Account',
        required: true,
    },
    creditAccount: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Account',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
exports.TransactionModel = (0, mongoose_1.model)('TransactionModel', transactionSchema);
