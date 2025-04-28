import createQRCodeService from "../services/create-qrcode.service";

import { Request, Response } from "express";

export default function QRCodeController() {
  const generateQRCode = async (req: Request, res: Response) => {
    const { url } = req.body;

    try {
      const response = await createQRCodeService({
        text: url,
      });

      res.status(200).json({
        message: "QR Code generated successfully",
        url: response,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error generating QR Code",
      });
    }
  };

  return {
    generateQRCode,
  };
}
