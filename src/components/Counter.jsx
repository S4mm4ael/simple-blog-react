import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div className="">
      <h1>App {count}</h1>
      <div>{count}</div>
      <input
        type="text"
        onChange={(event) => setCount(+event.target.value)}
        value={count}
      ></input>
      <button onClick={() => add()}>Add</button>
    </div>
  );
};
