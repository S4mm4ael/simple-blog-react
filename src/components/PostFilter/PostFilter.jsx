import React, { useState } from "react";
import SelectRegular from "../UI/SelectRegular/SelectRegular";
import InputRegular from "../UI/InputRegular/InputRegular";

function PostFilter({ filter, setFilter }) {
  const [sortOptions, setSortOptions] = useState([
    { value: "title", name: "By title" },
    { value: "body", name: "By description" },
  ]);

  return (
    <>
      <InputRegular
        value={filter.query}
        setValue={setFilter}
        placeholder="Search..."
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
