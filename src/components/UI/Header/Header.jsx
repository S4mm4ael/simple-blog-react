import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="App__header">
      <Link to="/">main</Link>
      <Link to="/about">about</Link>
    </div>
  );
}

export default Header;
