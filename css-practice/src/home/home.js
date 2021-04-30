import Me from '../me-svg/Me'
import './home.scss'


export default function Home() {

  return (
    <div className='home-wrap'>
      <section id='one' className='home'>
        <h1>H</h1>
        <h1>o</h1>
        <h1>m</h1>
        <h1>e</h1>
      </section>
      <section id='two' className='me-svg'>
        <Me />
      </section>
    </div>
  )
}
