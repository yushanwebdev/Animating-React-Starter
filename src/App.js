import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Toggle from "./Toggle";
import Nav from "./Nav";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  const navOpen = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  });

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" alt="" />
        <button className="menu-button" onClick={() => setNavOpen(!isNavOpen)}>
          Menu
        </button>
        <Nav style={navOpen} />
      </header>
      <main>
        <Toggle />
      </main>
    </animated.div>
  );
};

export default App;
