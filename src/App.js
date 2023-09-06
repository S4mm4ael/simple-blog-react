import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState("TEXT")

  function add() {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <div className="App">
      <h1>App {value}</h1>
      <div>{count}</div>
      <input type="text"
        onChange={event => setValue(event.target.value)}
        value={value}></input>
      <button onClick={() => add()}>Add</button>
    </div >
  );
}

export default App;
