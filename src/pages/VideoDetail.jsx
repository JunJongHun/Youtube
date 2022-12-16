import React from "react";
import { useLocation, useParams } from "react-router-dom";
import RelativeVideos from "../components/RelativeVideos";
import VideoMain from "../components/VideoMain";

function VideoDetail(props) {
  const {
    state: { video },
  } = useLocation();
  console.log(video);
  return (
    <div className="flex flex-col lg:flex-row ">
      <section className="basis-4/6">
        <VideoMain video={video}></VideoMain>
      </section>
      <section className="basis-2/6">
        <RelativeVideos video={video}></RelativeVideos>
      </section>
    </div>
  );
}

export default VideoDetail;
