import type { V2_MetaFunction } from "@remix-run/react";
import NavBar from 'app/components/NavBar.js';
import Question from 'app/components/Question.js'
import Video from 'app/components/Video.js'
import Progress from 'app/components/Progress.js'

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

      </div>
      
    </div>
  );
}
