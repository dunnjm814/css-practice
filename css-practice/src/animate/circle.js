import { useLayoutEffect, useRef, useState } from 'react'
import './circle.css'

export default function Circle() {
  const circleRef = useRef(null)
  //using ref will allow us to directly access the elements HTML properties.

  const [canSee, setCanSee] = useState(false)
  const classes = canSee ? "circle moved" : "circle"

  useLayoutEffect(() => {
    const onScroll = () => {
      // current holds the div, getBoundingClientRect() is div information.
      const topPosition = circleRef.current.getBoundingClientRect().top
      const reached = topPosition < window.innerHeight;
      setCanSee(reached)
    };
    window.addEventListener("scroll", onScroll);
    // cleanup scroll listener
    return () => window.removeEventListener("scroll", onScroll);
  })
  return <div className={classes} ref={circleRef}/>
}
