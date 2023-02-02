// 이 파일은 사용하지 않습니다 We don't use this file

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

const handler = nextConnect();

// export const config = {
//   api: {
//     bodyParser: {
//       bodyParser: false,
//       sizeLimit: "200mb", // Set desired value here
//     },
//   },
// };
// type Data = {
//   name: string;
// };
// interface info {
//   name: string;
//   studentNumber: string;
//   email: string;
//   phone: string;
//   attachment: string;
// }
// const CONTACT_MESSAGE_FIELDS: info = {
//   name: "이름",
//   studentNumber: "학번",
//   email: "Email",
//   phone: "전화번호",
//   attachment: "첨부파일",
// };

// const generateEmailContent = (data: any) => {
//   const stringData = Object.entries(data).reduce(
//     (str, [key, val]) =>
//       (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
//     ""
//   );
//   const htmlData = Object.entries(data).reduce((str, [key, val]) => {
//     return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
//   }, "");

//   return {
//     text: stringData,
//     html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>새 지원서 도착</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
//   };
// };
// handler.post(async (req: any, res: any) => {
//   console.log("도착", req.body);
//   try {
//     const files = req.body.data.files;
//     const body = req.body;
//     console.log("파일", files);
//     console.log("바디", body);
//     var object = {};
//     // body.forEach(function (value, key) {
//     //   object[key] = value;
//     // });
//     // var json = JSON.stringify(object);
//     // do stuff with files and body
//     res.status(HttpStatus.OK).json({ message: body });
//   } catch (err: any) {
//     console.log("에러", err.message);
//     res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
//   }
// });
// const data = await new Promise((resolve, reject) => {
//   const form = formidable();

//   form.parse(req, (err, fields, files) => {
//     if (err) reject({ err });
//     resolve({ err, fields, files });
//     console.log(fields, files);
//   });
// });
// res.status(200).json({
//   status: "ok",
//   data,
// });

// ---------------

//   if (
//     !data ||
//     !data.name ||
//     !data.studentNumber ||
//     !data.email ||
//     !data.phone
//   ) {
//     return res.status(400).send({ message: "Bad request임" });
//   }

//   try {
//     await transporter.sendMail({
//       ...mailOptions,
//       ...generateEmailContent(data),
//       subject: `${data.name}님의 지원`,
//       attachments: [
//         {
//           filename: `${data.name}(${data.studentNumber})님의 지원서`,
//           path: data.attachment,
//         },
//       ],
//     });

//     return res.status(200).json({ success: true });
//   } catch (err: any) {
//     console.log(err);
//     return res.status(400).json({ message: err.message });
//   }
// }
// // return res.status(400).json({ message: "Bad request" });
// };
export default handler;
