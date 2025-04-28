import { Router, Request, Response } from "express";
import QRCodeController from "../controller/QRCodeController";

const route = Router();

const { generateQRCode } = QRCodeController();

route.post("/qr-code", (req: Request, res: Response) =>
  generateQRCode(req, res)
);

export default route;
