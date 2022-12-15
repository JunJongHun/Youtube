import { rest } from "msw";
import { btsData } from "../data/btsData";
import { popularData } from "../data/popularData";

export const handlers = [
  // 인기 동영상
  rest.get("/videos/popular", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(popularData));
  }),

  // bts 동영상
  rest.get("/videos/bts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(btsData));
  }),
];
