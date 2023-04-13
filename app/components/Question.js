import React from "react";

function Question(props) {
  return (
    <div className="bg-sky-200 rounded-lg p-4 text-black w-4/6 h-24 my-12 mx-auto">
      <div className="mx-7 my-2">
        <p className="text-xl text-center my-auto font-medium">{props.texto}</p>
      </div>
    </div>
  );
}

export default Question;
