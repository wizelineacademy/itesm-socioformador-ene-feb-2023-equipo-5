function Progress(props: any) {
  return (
    <div className='my-15 w-3/5'>
      <label className="flex items-center">
        <input type="radio" disabled checked={props.checked} className="h-5 w-5 mx-4 border-blue-400 text-indigo-600 focus:ring-indigo-600" />
        <input type="radio" disabled checked={props.checked} className="h-5 w-5 mx-4 border-blue-400 text-indigo-600 focus:ring-indigo-600" />
        <input type="radio" disabled checked={props.checked} className="h-5 w-5 mx-4 border-blue-400 text-indigo-600 focus:ring-indigo-600" />
        <input type="radio" disabled checked={props.checked} className="h-5 w-5 mx-4 border-blue-400 text-indigo-600 focus:ring-indigo-600" />
        <input type="radio" disabled checked={props.checked} className="h-5 w-5 mx-4 border-blue-400 text-indigo-600 focus:ring-indigo-600" />
      </label>
    </div>
  );
}

export default Progress;

