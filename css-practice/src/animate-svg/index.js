import BikeGuy from './bikeguy'
import './svganimate.css'


export default function Svganimate() {
  return (
    <div className='animation-house'>
      <div className='wrapper'>
        <div className='section parallax image1'>
          <h1>Scroll down for an animation!</h1>
        </div>
        <div className='section static'>
          <BikeGuy />
        </div>
        <div className='section parallax image2'>
          <h1>Scroll down for an animation!</h1>
        </div>
        <div className='section static'>
          <BikeGuy />
        </div>
      </div>
    </div>
  )
}
