import React from "react";
import video from "./video.png";
import IA from "app/components/IA.js";
import Progress from "./Progress";
import Section from "./Section";

function Video(props) {
  return (
    <div className="mx-auto w-4/6">
      <div className="bg-white rounded-lg p-4 my-10 flex items-center">
        <img src={video} alt={props.alt} className=" w-3/5 h-auto" />
        <IA></IA>
      </div>
      <div className="bg-white rounded-lg p-4 my-10 flex items-center">
        <Progress checked={true} />
        <Section texto="Grammar section"></Section>
      </div>
    </div>
  );
}

export default Video;
