import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Checkout from "./Checkout";
import Accordion from "./Accordion";
import Gesture from "./Gesture";

import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" alt="" />
        <button className="menu-button" onClick={() => setNavOpen(!isNavOpen)}>
          Menu
        </button>
      </header>
      <main>
        <Accordion />
        <Checkout isOpen={isNavOpen} />
        <Gesture />
        <div />
      </main>
    </animated.div>
  );
};

export default App;
