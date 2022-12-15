import axios from "axios";
import { instance } from "./create";

export const getVideoData = async (keyword) => {
  return await axios(`/videos/${keyword ? keyword : "popular"}`).then((res) => {
    console.log(keyword + " 데이터 요청함");
    console.log(res);
    return res.data.items;
  });
};

// export const getVideoDataWithCreate = async (keyword) => {
//   return await instance
//     .get("search", {
//       params: {
//         part: "snippet",
//         maxResults: 25,
//         q: keyword,
//       },
//     })
//     .then((res) => {
//       console.log(keyword + " 데이터 요청함");
//       console.log(res);
//       return res.data.items;
//     });
// };
