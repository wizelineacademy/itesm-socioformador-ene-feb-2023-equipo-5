import React from 'react';

function Question(props) {
  return (
    <div className="bg-sky-200 rounded-lg p-4 text-black w-4/6 h-24 my-10 mx-auto text-center text-xl">
    <p>{props.texto}</p>
    </div>

  );
}

export default Question;
