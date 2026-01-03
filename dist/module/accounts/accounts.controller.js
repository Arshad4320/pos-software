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
exports.AccountController = void 0;
const accounts_services_1 = require("./accounts.services");
const createAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield accounts_services_1.AccountServices.createAccount(req.body);
        res.json({
            success: true,
            message: 'account created successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to create account',
            error: err,
        });
    }
});
const getAllAccounts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield accounts_services_1.AccountServices.getAllAccounts();
        res.json({
            success: true,
            message: 'account retrived successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: err,
        });
    }
});
const getAccountById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield accounts_services_1.AccountServices.getAccountById(req.params.id);
        res.json({
            success: true,
            message: 'single account retrived successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: err,
        });
    }
});
const updateAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield accounts_services_1.AccountServices.updateAccount(req.params.id, req.body);
        res.json({
            success: true,
            message: 'account updated successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: err,
        });
    }
});
const deleteAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield accounts_services_1.AccountServices.deleteAccount(req.params.id);
        res.json({
            success: true,
            message: 'account deleted successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: err,
        });
    }
});
exports.AccountController = {
    createAccount,
    getAccountById,
    getAllAccounts,
    deleteAccount,
    updateAccount,
};
