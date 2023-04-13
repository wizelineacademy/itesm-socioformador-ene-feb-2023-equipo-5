import type { V2_MetaFunction} from "@remix-run/react";
import {Link} from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
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
     <h1> esto lo voy a borrar, pero es para poder movernos de paginas mientras creamos el cascaron :D</h1>
     <br></br>
     <Link to='/Result'>
       Ir a la pagina de resultados
     </Link>
   </div>
    </div>
    
  );
}
