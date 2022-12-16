import React from "react";
import { useNavigate } from "react-router-dom";
import { FormatAgo } from "../util/date";

function VideoCard({ video }) {
  let { title, channelTitle, publishTime, thumbnails } = video.snippet;
  const navigate = useNavigate();

  return (
    <div className=" cursor-pointer flex flex-col w-full box-border pr-1 pl-1 mb-3 md:w-1/3 lg:w-1/4 xl:w-1/5 sm:w-1/2">
      <li
        className="lg:w-64"
        onClick={() => {
          navigate(
            `/videos/watch/${
              typeof video.id === "string" ? video.id : video.id.videoId
            }`,
            { state: { video: video } }
          );
        }}
      >
        <img className="w-full h-32" src={thumbnails.medium.url} alt={title} />
        <div className="mt-2">
          <p className="text-lg font-semibold line-clamp-2">{title}</p>
          <p className="text-sm opacity-80 line-clamp-1">{channelTitle}</p>
          <p className="text-sm opacity-80">{FormatAgo(publishTime, "ko")}</p>
        </div>
      </li>
    </div>
  );
}

export default VideoCard;
