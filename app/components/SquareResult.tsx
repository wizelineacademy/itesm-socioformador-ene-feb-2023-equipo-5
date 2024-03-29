function SquareR(props: any) {
  return (
    <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-bluefigma2 border-8 border-white rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-4xl font-bold text-white dark:text-white">{props.grammar}%</h3>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <div className=" font-medium dark:text-white ">
            <div className="text-white font-light text-lg">Grammar</div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-bluefigma5 border-8 border-white rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-4xl font-bold text-white dark:text-white">{props.vocabulary}%</h3>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <div className=" font-medium dark:text-white ">
            <div className="text-white font-light text-lg">Vocabulary</div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-bluefigma3 border-8 border-white rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-4xl font-bold text-white dark:text-white">{props.coherence}%</h3>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <div className="font-medium dark:text-white ">
            <div className="text-white font-light text-lg">Coherence</div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-bluefigma6 border-8 border-white rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-4xl font-bold text-white dark:text-white">{props.average}%</h3>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <div className="font-medium dark:text-white ">
            <div className="text-white font-light text-lg">Average</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
export default SquareR;
