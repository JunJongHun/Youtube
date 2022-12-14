import React from "react";
import { BiSearchAlt } from "react-icons/bi";

function Search(props) {
  return (
    <div>
      <input type="text" name="keyword" id="" />
      <button>
        <BiSearchAlt></BiSearchAlt>
      </button>
    </div>
  );
}

export default Search;
