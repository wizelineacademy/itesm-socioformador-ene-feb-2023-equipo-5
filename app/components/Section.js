import React from "react";

function Section(props) {
  return (
    <div className="bg-sky-200 rounded-lg p-4 text-black w-4/24 h-auto my-auto mx-auto flex justify-center items-right">
      <div className="mx-7 my-auto">
        <p className="text-lg text-center my-auto font-medium">{props.texto}</p>
      </div>
    </div>
  );
}

export default Section;
