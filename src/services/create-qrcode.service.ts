import QRCode from "qrcode";

interface ICreateQRCodeServiceProps {
  text: string;
}

export default async function createQRCodeService({
  text,
}: ICreateQRCodeServiceProps) {
  try {
    const response = await QRCode.toDataURL(text);

    return response;
  } catch (error) {
    console.error(error);
  }
}
