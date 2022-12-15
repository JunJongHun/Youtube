import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { searchRecoilState } from "../../context/recoil/searchRecoil";

function Search(props) {
  const [text, setText] = useRecoilState(searchRecoilState);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    // 검색한거 처리해주기
    setText("");
  };
  return (
    <form className="w-full flex justify-center" onSubmit={handleSubmit}>
      <input
        className="w-7/12 p-3 outline-none bg-black text-gray-50"
        onChange={handleChange}
        type="text"
        name="keyword"
        value={text}
        placeholder="Searching.."
      />
      <button className="bg-zinc-600 p-4" onClick={handleSubmit}>
        <BiSearchAlt></BiSearchAlt>
      </button>
    </form>
  );
}

export default Search;
