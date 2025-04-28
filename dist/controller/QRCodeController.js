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
exports.default = QRCodeController;
const create_qrcode_service_1 = __importDefault(require("../services/create-qrcode.service"));
function QRCodeController() {
    const generateQRCode = (req, res) => __awaiter(this, void 0, void 0, function* () {
        const { url } = req.body;
        try {
            const response = yield (0, create_qrcode_service_1.default)({
                text: url,
            });
            res.status(200).json({
                message: "QR Code generated successfully",
                url: response,
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Error generating QR Code",
            });
        }
    });
    return {
        generateQRCode,
    };
}
