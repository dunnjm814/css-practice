
import MeTwo from '../me-svg/Me2'
import './home.scss'


export default function Home() {

  return (
    <div className="home-wrap">
      <section id="one">
        <div className="home">
          <h1 className='letter'>H</h1>
          <h1 className='letter'>o</h1>
          <h1 className='letter'>m</h1>
          <h1 className='letter'>e</h1>
        </div>
      </section>
      <section id="two" className="me-svg">

        <MeTwo />
      </section>
    </div>
  );
}
