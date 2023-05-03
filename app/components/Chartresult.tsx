function Chart() {
  return (
    <>
      <div className=" px-10 py-5 text-gray-700">
        <div className=" w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
          <div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-4 ">
            <div className="relative flex flex-col items-center flex-grow pb-5 group ">
              <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block ">
                96%
              </span>
              <div className="relative flex justify-center w-12 h-96 z-10 rounded-lg bg-bluefigma6"></div>
              <span className="absolute bottom-0 text-xs font-bold">Lectura</span>
            </div>
            <div className="relative flex flex-col items-center flex-grow pb-5 group">
              <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                30%
              </span>
              <div className="relative flex justify-center w-12 h-36 rounded-lg bg-bluefigma5"></div>
              <span className="absolute bottom-0 text-xs font-bold">
                {/*
    <body className="flex flex-col items-center justify-center w-screen h-screen px-5 py-1 text-gray-700 mt-52 ">
      <div className="flex flex-col items-left w-full max-w-screen-md p-20 pb-2 bg-cyan-100 rounded-lg shadow-xl sm:p-32 mt-32">
        <h2 className="text-xl font-bold ">Puntaje Máximo</h2>

        <div className="flex items-end flex-grow w-full mt-2 space-x-1 sm:space-x-3">
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block pt-10">
              $37,500
            </span>
            <div className="relative flex justify-center w-10 h-10 "></div>
            <div className="relative flex justify-center w-10 h-96 bg-bluefigma1 rounded-lg"></div>
            <span className="absolute bottom-0 text-xs font-ligth text-sm">
              Lectura
            </span>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              $45,000
            </span>
            <div className="relative flex justify-center w-10 h-36 bg-bluefigma2 rounded-lg"></div>
            <span className="absolute bottom-0 text-xs font-normal text-sm">
*/}
                Escritura
              </span>
            </div>
            <div className="relative flex flex-col items-center flex-grow pb-5 group">
              <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                50%
              </span>
              <div className="relative flex justify-center w-12 h-52 rounded-lg bg-bluefigma4"></div>
              <span className="absolute bottom-0 text-xs font-bold">
                {/*
            <span className="absolute top-0 hidden-mt-6 text-xs font-bold group-hover:block">
              $47,500
            </span>
            <div className="relative flex justify-center w-10 h-24 bg-bluefigma3 rounded-lg"></div>
            <span className="absolute bottom-0 text-xs font-ligth text-sm">
*/}
                Escuchar
              </span>
            </div>
            <div className="relative flex flex-col items-center flex-grow pb-5 group">
              <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                12%
              </span>
              <div className="relative flex justify-center w-12 h-12 rounded-lg bg-bluefigma3"></div>
              <span className="absolute bottom-0 text-xs font-bold">
                {/*
            <span className="absolute top-0 hidden-mt-6 text-xs font-bold group-hover:block">
              $50,000
            </span>
            <div className="relative flex justify-center w-10 h-10 bg-bluefigma4 rounded-lg  "></div>
            <span className="absolute bottom-0 text-xs font-ligth text-sm">
*/}
                Gramática
              </span>
            </div>
            <div className="relative flex flex-col items-center flex-grow pb-5 group">
              <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                80%
              </span>
              <div className="relative flex justify-center w-12 h-80 rounded-lg bg-bluefigma2"></div>
              <span className="absolute bottom-0 text-xs font-bold">Dicción</span>
            </div>
            <div className="relative flex flex-col items-center flex-grow pb-5 group">
              <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                40%
              </span>
              <div className="relative flex justify-center w-12 h-40 rounded-lg bg-bluefigma1"></div>
              <span className="absolute bottom-0 text-xs font-bold">
                {/*
              $47,500
            </span>
            <div className="relative flex justify-center w-10 h-20 bg-bluefigma5 rounded-lg"></div>
            <span className="absolute bottom-0 text-xs font-ligth text-sm">
              Dicción
            </span>
          </div>
          <div className="relative flex flex-col items-center flex-grow pb-5 group">
            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
              $55,000
            </span>
            <div className="relative flex justify-center w-10 h-16 bg-bluefigma6 rounded-lg "></div>
            <span className="absolute bottom-0 text-xs font-ligth text-sm">
*/}
                Vocabulario
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*
    </body>
*/}
    </>
  );
}
export default Chart;
