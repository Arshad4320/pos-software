"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModel = void 0;
const mongoose_1 = require("mongoose");
const AccountSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['Asset', 'Liability', 'Equity', 'Revenue', 'Expense'],
    },
    balance: { type: Number, default: 0 },
}, { timestamps: true });
exports.AccountModel = (0, mongoose_1.model)('Account', AccountSchema);
