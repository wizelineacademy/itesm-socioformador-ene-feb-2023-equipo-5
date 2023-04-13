import type { V2_MetaFunction } from "@remix-run/react";
import NavBar from 'app/components/NavBar.js';
import Question from 'app/components/Question.js'

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div>
        <NavBar></NavBar>
        
        <Question texto="¿Cuál ha sido una situación en la que tuviste un desacuerdo en un ambiente de trabajo? ¿Cómo lo resolviste?"></Question>
      </div>
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
    </div>
  );
}
