import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const Toggle = () => {
  const [isToggle, setToggle] = useState(false);
  const transition = useTransition(isToggle, null, {
    from: { opacity: 0, position: "absolute" },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {transition.map(({ item, key, props }) =>
        item ? (
          <animated.h1 style={props}>Hello</animated.h1>
        ) : (
          <animated.h1 style={props}>World</animated.h1>
        )
      )}
      <button onClick={() => setToggle(!isToggle)}>Toggle</button>
    </div>
  );
};

export default Toggle;
