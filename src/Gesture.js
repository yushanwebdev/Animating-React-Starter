import React from "react";
import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "react-spring";

const Gesture = () => {
  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
  }));

  const bind = useDrag(({ down, movement }) => {
    set({ xy: down ? movement : [0, 0] });
  });

  return (
    <animated.div
      {...bind()}
      className="box"
      style={{
        transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
      }}
    />
  );
};

export default Gesture;
