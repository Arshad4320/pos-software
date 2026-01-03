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
exports.AccountServices = void 0;
const accounts_model_1 = require("./accounts.model");
const createAccount = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield accounts_model_1.AccountModel.create(payload);
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
const getAllAccounts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield accounts_model_1.AccountModel.find().sort({ name: 1 });
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
const getAccountById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield accounts_model_1.AccountModel.findById(id);
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
const updateAccount = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield accounts_model_1.AccountModel.findByIdAndUpdate(id, payload, {
            new: true,
        });
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
const deleteAccount = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield accounts_model_1.AccountModel.findByIdAndDelete(id, { new: true });
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
exports.AccountServices = {
    createAccount,
    getAllAccounts,
    getAccountById,
    updateAccount,
    deleteAccount,
};
