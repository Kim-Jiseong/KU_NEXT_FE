// 이 파일은 사용하지 않습니다 We don't use this file
import nodemailer from "nodemailer";

const email = "test@example.com";
const pass = "구글 앱 비밀번호";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
