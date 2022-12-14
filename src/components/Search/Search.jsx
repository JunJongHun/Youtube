import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { searchRecoilState } from "../../context/recoil/searchRecoil";

function Search(props) {
  const [text, setText] = useRecoilState(searchRecoilState);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    // 검색한거 처리해주기
    setText("");
  };
  return (
    <div>
      <input onChange={handleChange} type="text" name="keyword" value={text} />
      <button onClick={onClick}>
        <BiSearchAlt></BiSearchAlt>
      </button>
    </div>
  );
}

export default Search;
