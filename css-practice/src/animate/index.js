import React, {useLayoutEffect} from 'react'
import Circle from './circle';
import './animations.css'


function Animate() {
  useLayoutEffect(() => {

  })
  return (
    <div className='animate-page'>
      <h1>Animations page</h1>
      <div className='scroll'>scroll boiiii</div>
      <div className='scroll'>scroll boiiii</div>
      <div className='scroll'>scroll boiiii</div>
      <div className='scroll'>scroll boiiii</div>
      <div className='scroll'>scroll boiiii</div>
      <div className='scroll'>scroll boiiii</div>
      <Circle />
      <div className='scroll'>scroll boiiii</div>
      <div className='scroll'>scroll boiiii</div>
      <div className='scroll'>scroll boiiii</div>
    </div>
  )
}
export default Animate
