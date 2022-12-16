import React from "react";
import { useNavigate } from "react-router-dom";
import { FormatAgo } from "../util/date";

function VideoCard({ video }) {
  let { title, channelTitle, publishTime, thumbnails } = video.snippet;
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(
          `/videos/watch/${
            typeof video.id === "string" ? video.id : video.id.videoId
          }`
        );
      }}
      className=" cursor-pointer flex flex-col w-full box-border pr-1 pl-1 mb-3 md:w-1/3 lg:w-1/4 xl:w-1/5 sm:w-1/2"
    >
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
