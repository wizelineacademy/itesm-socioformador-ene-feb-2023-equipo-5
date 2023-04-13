import React from "react";
import video from "./video.png";
import IA from "app/components/IA.js";
import Progress from "./Progress";

function Video(props) {
  return (
    <div className="mx-auto w-4/6">
      <div className="bg-white rounded-lg p-4 my-10 flex items-center">
        <img src={video} alt={props.alt} className=" w-3/5 h-auto" />
        <IA></IA>
      </div>
      <Progress checked={true} />
    </div>
  );
}

export default Video;
