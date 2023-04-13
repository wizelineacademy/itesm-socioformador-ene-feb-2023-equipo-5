import React from 'react';
import IA from "./IA.png"

function ia(props) {
  return (
    <div className="bg-white rounded-lg p-4 my-10 mx-auto w-5/12">
      <img src={IA} alt={props.alt} className="mx-auto w-2/5 h-auto" />
      
    </div>
  );
}

export default ia;