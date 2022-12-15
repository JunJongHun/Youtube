import { rest } from "msw";
import { btsData } from "../data/btsData";
import { popularData } from "../data/popularData";

export const handlers = [
  // 인기 동영상
  rest.get("/videos/popular", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(popularData));
  }),

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
