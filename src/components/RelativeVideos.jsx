import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getRelatedVideoId } from "../api/youtube";
import VideoCard from "./VideoCard";
function RelativeVideos({ video }) {
  const videoId = typeof video.id === "string" ? video.id : video.id.videoId;
  const {
    isLoading,
    error,
    data: relatedVideos,
  } = useQuery(
    ["relation", videoId],
    () => {
      return getRelatedVideoId(videoId);
    },
    {
      staleTime: 1000 * 60 * 1,
    }
  );
  return (
    <>
      {isLoading && <p>loading...</p>}
      {error && <p>error...</p>}
      {relatedVideos && (
        <ul className="flex flex-col">
          {relatedVideos.map((video) => (
            <VideoCard key={video.id.videoId} video={video}></VideoCard>
          ))}
        </ul>
      )}
    </>
  );
}

export default RelativeVideos;
