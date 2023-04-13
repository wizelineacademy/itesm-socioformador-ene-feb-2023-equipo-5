import React from 'react';

function Progress(props) {
  return (
    <div className='my-15'>
        <label className="flex items-center">
            <input type="radio" disabled checked={props.checked} className="h-5 w-5 mx-2 border-blue-400 text-indigo-600 focus:ring-indigo-600" />
            <input type="radio" disabled checked={props.checked} className="h-5 w-5 mx-2 border-blue-400 text-indigo-600 focus:ring-indigo-600" />
            <input type="radio" disabled checked={props.checked} className="h-5 w-5 mx-2 border-blue-400 text-indigo-600 focus:ring-indigo-600" />
            <input type="radio" disabled checked={props.checked} className="h-5 w-5 mx-2 border-blue-400 text-indigo-600 focus:ring-indigo-600" />
            <input type="radio" disabled checked={props.checked} className="h-5 w-5 mx-2 border-blue-400 text-indigo-600 focus:ring-indigo-600" />

        </label>
    </div>
   
  );
}

export default Progress;

