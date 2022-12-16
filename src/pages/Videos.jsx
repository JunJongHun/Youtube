import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getVideoData } from "../api/youtube";
import VideoCard from "../components/VideoCard";

function Videos(props) {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ["videos", keyword],
    () => {
      return getVideoData(keyword);
    },
    {
      staleTime: 1000 * 60 * 1,
    }
  );

  return (
    <>
      {/* <div>Videos {keyword ? keyword : "🔥"}</div> */}
      {isLoading && <p>loading...</p>}
      {error && <p>error...</p>}
      {videos && (
        <ul className="flex flex-wrap box-border -ml-1 -mr-1 ">
          {videos.map((video) => (
            <VideoCard key={video.id.videoId} video={video}></VideoCard>
          ))}
        </ul>
      )}
    </>
  );
}

export default Videos;
