"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const QRCodeController_1 = __importDefault(require("../controller/QRCodeController"));
const route = (0, express_1.Router)();
const { generateQRCode } = (0, QRCodeController_1.default)();
route.post("/qr-code", (req, res) => generateQRCode(req, res));
exports.default = route;
