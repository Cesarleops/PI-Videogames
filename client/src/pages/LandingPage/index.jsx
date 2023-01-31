
import {Link} from 'react-router-dom'
import './landing.css'
export const LandingPage = () => {

  return(
    <main className='landing'>
      <section className='landingSection'> 
          <h1 className='landingPage__title'>AllGames</h1>
          <h3 className='landingPage__subtitle'>An Online Library For Gamers</h3>
          <Link to="/home">
          <button className='startButton'>START</button>
        </Link>
       </section>
       <section>
       <img src='https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=740&t=st=1675178475~exp=1675179075~hmac=228642bce5f6bab8cf8e59ea88fd3c082693262d411aa9c7af86eb4f6c281fb0' alt="landing ilustration" className='landingIlustration'/>
       </section>
     
    </main>
  );
};
