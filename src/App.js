import React from "react";
import { useSpring } from "react-spring";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  console.log(fade);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="" />
        <button className="menu-button">Menu</button>
      </header>
    </div>
  );
};

export default App;
