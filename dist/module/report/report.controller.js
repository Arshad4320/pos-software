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
exports.ReportController = void 0;
const report_services_1 = require("./report.services");
const getJournalReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield report_services_1.ReportServices.getJournalReport();
        res.json({
            success: true,
            message: 'journal report retrived successfully',
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
const getBalanceSheet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield report_services_1.ReportServices.getBalanceSheet();
        res.json({
            success: true,
            message: 'balance sheet retrived successfully',
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
const getIncomeStatement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield report_services_1.ReportServices.getIncomeStatement();
        res.json({
            success: true,
            message: 'income statement retrived successfully',
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
exports.ReportController = {
    getJournalReport,
    getBalanceSheet,
    getIncomeStatement,
};
