import React from "react";
import { FormatAgo } from "../util/date";

function VideoCard({ video }) {
  let { title, channelTitle, publishTime, thumbnails } = video.snippet;

  return (
    <li className=" flex flex-col w-1/5 box-border pr-1 pl-1 mb-3">
      <img className="w-full h-32" src={thumbnails.medium.url} alt={title} />
      <div className="mt-2">
        <p className="text-lg font-semibold line-clamp-2">{title}</p>
        <p className="text-sm opacity-80 line-clamp-1">{channelTitle}</p>
        <p className="text-sm opacity-80">{FormatAgo(publishTime, "ko")}</p>
      </div>
    </li>
  );
}

export default VideoCard;
