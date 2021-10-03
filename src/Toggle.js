import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Toggle = () => {
  const [isToggle, setToggle] = useState(false);

  const fade = useSpring({
    // opacity: isToggle ? 1 : 0,
    color: isToggle ? "tomato" : "green",
    // fontSize: isToggle ? "2rem" : "5em",
    transform: isToggle ? "translate3d(0,0,0)" : "translate3d(0, -50px, 0)", // string patterns
  });

  return (
    <div>
      <animated.h1 style={fade}>Hello</animated.h1>
      <button onClick={() => setToggle(!isToggle)}>Toggle</button>
    </div>
  );
};

export default Toggle;
