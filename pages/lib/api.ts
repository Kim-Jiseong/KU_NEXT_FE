// 이 파일은 사용하지 않습니다 We don't use this file
import axios from "axios";

export const sendContactForm = async (data: any) => {
  console.log("프론트 데이터", data);

  await axios
    .post(
      "/api/contact",
      { data },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
