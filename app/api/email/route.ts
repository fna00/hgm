import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, subject, fileName, message, fileType, fileContent } =
    await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: `"${name}"`,
    to: process.env.MY_EMAIL,
    replyTo: email,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `${subject} | ${name} (${email})`,
    text: message,
    attachments: [
      {
        filename: fileName, // Dosya adı
        content: fileContent, // Dosya içeriği (base64)
        encoding: "base64", // İçeriği base64 formatında gönderiyoruz
        contentType: fileType, // Dosya türü
      },
    ],
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
