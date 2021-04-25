import "./morph.css";
import React, { useState } from 'react'

import { Spring, animated } from "react-spring";


export default function Morph(props) {
  const xPath =
    "M100.88 71.5L144 114.32 115.12 143 72 100.18 28.88 143 0 114.32 43.12 71.5 0 28.68 28.88 0 72 42.82 115.12 0 144 28.68 100.88 71.5z";
  const checkPath =
    "M152.82 28.2l-21.08 21.65-25.86 26.57-19.31 19.84-31.47 32.32-.08-.08-.07.08-26.53-27.17L0 72.3l27.57-28.24 27.41 28.08 21.43-22.01 25.87-26.58L125.21 0l27.61 28.2z";
  const [toggle, setToggle] = useState(false)
  const [path, setPath] = useState({
    paths: [
      "M100.88 71.5L144 114.32 115.12 143 72 100.18 28.88 143 0 114.32 43.12 71.5 0 28.68 28.88 0 72 42.82 115.12 0 144 28.68 100.88 71.5z",
      "M152.82 28.2l-21.08 21.65-25.86 26.57-19.31 19.84-31.47 32.32-.08-.08-.07.08-26.53-27.17L0 72.3l27.57-28.24 27.41 28.08 21.43-22.01 25.87-26.58L125.21 0l27.61 28.2z",
    ],
    index: 0
  });
  const [fill, setFill] = useState("#ff0000");

  const morphIt = () => {

    setToggle(prev => !prev)
    console.log(toggle)
    if (toggle) {
      setPath(checkPath)
      setFill("#00ff00");
    }
    setPath(xPath)
    setFill('#ff0000');
  }
  return (
    <div className="morph-page">
      <h1>morph</h1>
      <svg id="check" viewBox="0 0 1000 1000">
        {/* <path fill={fill} d={path} onClick={morphIt} /> */}
        <Spring>
          <animated.path fill={fill} d={path} onClick={morphIt} />
        </Spring>
      </svg>
    </div>
  );
}
