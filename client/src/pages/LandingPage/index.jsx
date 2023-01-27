import {Link} from 'react-router-dom'

export const LandingPage = () => {
  return(
    <main>
       <section>
        <img src="" alt="a videogame"/>
        <p>something will go here</p>
       </section>
       <Link to="/home">
        <button>START</button>
       </Link>
       
    </main>
  );
};
