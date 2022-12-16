import { rest } from "msw";
import { btsData } from "../data/btsData";
import { popularData } from "../data/popularData";
import { relatedVideosData } from "../data/relatedVideosData";

export const handlers = [
  // 인기 동영상
  rest.get("/videos/popular", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(popularData));
  }),
  // 관련 동영상
  rest.get(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&key={{key}}",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(relatedVideosData));
    }
  ),

  // bts 동영상
  rest.get("/videos/bts?part=snippet", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(btsData));
  }),
  // 검색 동영상
  rest.get(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bts&key={{key}}",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(btsData));
    }
  ),
];
