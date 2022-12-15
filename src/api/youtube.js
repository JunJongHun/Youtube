import axios from "axios";

export const getVideoData = async (keyword) => {
  return await axios(`/videos/${keyword ? keyword : "popular"}`).then((res) => {
    console.log(keyword + " 데이터 요청함");
    console.log(res);
    return res.data.items;
  });
};
