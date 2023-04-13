
import type { V2_MetaFunction } from "@remix-run/react";
import NavBar from 'app/components/NavBar.js';
import Question from 'app/components/Question.js'
import Video from 'app/components/Video.js'
import Footer from 'app/components/Footer.js'
import Progress from 'app/components/Progress.js'
import {Link} from "@remix-run/react";


export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>

      <div className="mx-auto">
        <NavBar></NavBar>
        
        <Question texto="¿Cuál ha sido una situación en la que tuviste un desacuerdo en un ambiente de trabajo? ¿Cómo lo resolviste?"></Question>

        <Video></Video>

        <Footer></Footer>

      </div>
      

      <h1 className="text-white">Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      
      <div> 
        <br></br>
     <h1 className="text-red-50"> esto lo voy a borrar, pero es para poder movernos de paginas mientras creamos el cascaron :D</h1>
     <br></br>
     <Link to='/ResultAdmin'>
       Ir a la pagina de resultados
     </Link>
     <br></br>
     <Link to='/tests'>
       Ir a la pagina de tests
     </Link>
   </div>

    </div>
    
  );
}
