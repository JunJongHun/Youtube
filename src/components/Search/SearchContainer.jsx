import React from "react";
import Search from "./Search";
import Title from "./Title";

function SearchContainer(props) {
  return (
    <section className="w-full flex text-4xl p-5 mb-5 border-b border-zinc-600">
      <Title></Title>
      <Search></Search>
    </section>
  );
}

export default SearchContainer;
