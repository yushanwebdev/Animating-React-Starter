import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Toggle = () => {
  const [isToggle, setToggle] = useState(false);

  const { color, y } = useSpring({
    // opacity: isToggle ? 1 : 0,
    // fontSize: isToggle ? "2rem" : "5em",
    color: isToggle ? "tomato" : "green",
    y: isToggle ? 0 : -50,
  });

  return (
    <div>
      <animated.h1
        style={{
          transform: y.interpolate((y) => `translate3d(0, ${y}px, 0)`),
          color,
        }}
      >
        Hello
      </animated.h1>
      <button onClick={() => setToggle(!isToggle)}>Toggle</button>
    </div>
  );
};

export default Toggle;
