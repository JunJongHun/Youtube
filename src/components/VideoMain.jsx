/* eslint-disable jsx-a11y/iframe-has-title */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getChannelImageURL } from "../api/youtube";

function VideoMain({ video }) {
  const { title, channelId, channelTitle, description } = video.snippet;
  const {
    isLoading,
    error,
    data: url,
  } = useQuery(
    ["channel", channelId],
    () => {
      return getChannelImageURL(channelId);
    },
    { staleTime: 1000 * 60 * 1 }
  );
  return (
    <div className="">
      <iframe
        id="player"
        type="text/html"
        width="100%"
        height="390"
        src={`http://www.youtube.com/embed/${
          typeof video.id === "string" ? video.id : video.id.videoId
        }`}
        frameborder="0"
      />
      <section className="p-4">
        <div className="font-extrabold text-xl">{title}</div>
        <div className="flex items-center mt-2 mb-2">
          {url && (
            <img
              className="mr-2 w-10 h-10 rounded-full"
              src={url}
              alt="loading.."
            />
          )}
          <div>{channelTitle}</div>
        </div>
        <div>{description}</div>
      </section>
    </div>
  );
}

export default VideoMain;
