import { rest } from "msw";
import { btsData } from "../../public/data/btsData";
import { popularData } from "../../public/data/popularData";

export const handlers = [
  // 인기 동영상
  rest.get("/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(popularData));
  }),

  // 인기 동영상
  rest.get("/videos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(popularData));
  }),

  // bts 동영상
  rest.get("/videos/:keyword", (req, res, ctx) => {
    return res(ctx.status(200), ctx.jsos(btsData));
  }),
];
