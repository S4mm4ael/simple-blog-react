import React, { useState } from "react";
import SelectRegular from "../UI/SelectRegular/SelectRegular";
import SearchBar from "../UI/SearchBar/SearchBar";

function PostFilter({ filter, setFilter }) {
  const [sortOptions, setSortOptions] = useState([
    { value: "title", name: "By title" },
    { value: "body", name: "By description" },
  ]);

  return (
    <>
      <SearchBar
        style={{ width: 400 }}
        value={filter.query}
        setValue={setFilter}
        placeholder="Search by title..."
      />
      <SelectRegular
        value={filter.sort}
        sortOptions={sortOptions}
        onChange={(sortOptions) => setFilter({ ...filter, sort: sortOptions })}
      />
    </>
  );
}

export default PostFilter;
