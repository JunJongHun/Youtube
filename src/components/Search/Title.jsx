import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Title(props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/`);
      }}
    >
      <AiFillYoutube></AiFillYoutube>
      <div>JUNtube</div>
    </div>
  );
}

export default Title;
