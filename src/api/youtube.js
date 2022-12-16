import axios from "axios";
// import { instance } from "./create";

export const getVideoData = async (keyword) => {
  return await axios(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${
      keyword ? keyword : "popular"
    }&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  ).then((res) => {
    console.log(keyword + " 데이터 요청함");
    console.log(res);
    return res.data.items;
  });
};

export const getChannelImageURL = async (channelId) => {
  return await axios(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  ).then((res) => res.data.items[0].snippet.thumbnails.default.url);
};

export const getRelatedVideoId = async (videoId) => {
  return await axios(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  ).then((res) => {
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
