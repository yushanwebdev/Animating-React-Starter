import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import useMeasure from "./useMeasure";

const Accordion = () => {
  const [on, toggle] = useState(false);
  const [bind, { height, top }] = useMeasure();

  const anime = useSpring({
    height: on ? height + top * 2 : 0,
    overflow: "hidden",
  });

  return (
    <div>
      <h1>
        <button onClick={() => toggle(!on)}>Toggle</button>
      </h1>
      <animated.div style={anime}>
        <div className="accordion" {...bind}>
          <p>Hello, I'm in the accordion</p>
        </div>
      </animated.div>
    </div>
  );
};

export default Accordion;
