import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const Toggle = () => {
  const [items, setItems] = useState([
    {
      key: 1,
      letter: "S",
    },
    {
      key: 2,
      letter: "c",
    },
    {
      key: 3,
      letter: "o",
    },
    {
      key: 4,
      letter: "t",
    },
    {
      key: 5,
      letter: "t",
    },
  ]);
  const transition = useTransition(items, (items) => items.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {transition.map(({ item, key, props }) => (
        <animated.h1 style={props} key={key}>
          {item.letter}
        </animated.h1>
      ))}
      <button
        onClick={() =>
          setItems([
            {
              key: "1",
              letter: "Y",
            },
          ])
        }
      >
        Toggle
      </button>
    </div>
  );
};

export default Toggle;
