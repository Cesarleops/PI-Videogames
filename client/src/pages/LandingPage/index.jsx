
import {Link} from 'react-router-dom'
import './landing.css'
export const LandingPage = () => {

  return(
    <main className='landing'>
      <div className='landingSection'> 
          <h1 className='landingPage__title'>AllGames</h1>
          <h3 className='landingPage__subtitle'>An Online library For Gamers</h3>
          <Link to="/home">
          <button>START</button>
        </Link>
       </div>
     
       
    </main>
  );
};
