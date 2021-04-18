import React, {useLayoutEffect} from 'react'


function Animate() {
  useLayoutEffect(() => {
    const onScroll = () => { };
    window.addEventListener('scroll', onScroll)
    // cleanup scroll listener 
    return ()=> window.removeEventListener('scroll', onScroll)
  })
  return (
    <>
      <h1>Animations page</h1>
    </>
  )
}
export default Animate
