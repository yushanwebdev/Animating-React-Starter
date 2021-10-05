import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Toggle from "./Toggle";
// import Nav from "./Nav";
import logo from "./logo.svg";
import "./App.css";
import Checkout from "./Checkout";

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
        {/* <Nav style={navOpen} /> */}
      </header>
      <main>
        <Toggle />
        <Checkout isOpen={isNavOpen} />
      </main>
    </animated.div>
  );
};

export default App;
