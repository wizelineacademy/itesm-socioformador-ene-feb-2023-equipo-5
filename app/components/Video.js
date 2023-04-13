import React from 'react';
import video from "./video.png"

function Video(props) {
  return (
    <div className="bg-white rounded-lg p-4 my-10 mx-auto w-4/6">
      <img src={video} alt={props.alt} className="mx-right w-3/5 h-auto" />
    </div>
  );
}

export default Video;