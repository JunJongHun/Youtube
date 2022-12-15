import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Title(props) {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-center items-center cursor-pointer"
      onClick={() => {
        navigate(`/`);
      }}
    >
      <div className="text-youtube_main">
        <AiFillYoutube></AiFillYoutube>
      </div>
      <h1 className="font-bold ml-3 text-3xlxl">JUNtube</h1>
    </div>
  );
}

export default Title;
