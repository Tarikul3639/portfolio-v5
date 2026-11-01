declare module "qrcode" {
  type CreateOptions = {
    errorCorrectionLevel?: "L" | "M" | "Q" | "H"
  }

  type QRCodeData = {
    modules: {
      size: number
      get(row: number, column: number): boolean
    }
  }

  const QRCode: {
    create(text: string, options?: CreateOptions): QRCodeData
  }

  export default QRCode
}
