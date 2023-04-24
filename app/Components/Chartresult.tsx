function Chart() {
    return (
        <body className="flex flex-col items-center justify-center w-screen h-screen px-10 py-20 text-gray-700 bg-gray-100">

     
        <div className="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
            <h2 className="text-xl font-bold">Resultados</h2>
            <div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-0">
                 <div className="relative flex flex-col items-center flex-grow pb-5 group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block ">96%</span>
                    <div className="relative flex justify-center w-16 h-96 z-10 rounded-lg bg-bluefigma6"></div>
                    <span className="absolute bottom-0 text-xs font-bold">Lectura</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-5 group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">30%</span>
                    <div className="relative flex justify-center w-16 h-36 rounded-lg bg-bluefigma5"></div>
                    <span className="absolute bottom-0 text-xs font-bold">Escritura</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-5 group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">50%</span>
                    <div className="relative flex justify-center w-16 h-52 rounded-lg bg-bluefigma4"></div>
                    <span className="absolute bottom-0 text-xs font-bold">Escuchar</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-5 group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">12%</span>
                    <div className="relative flex justify-center w-16 h-12 rounded-lg bg-bluefigma3"></div>
                    <span className="absolute bottom-0 text-xs font-bold">Gramática</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-5 group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">80%</span>
                    <div className="relative flex justify-center w-16 h-80 rounded-lg bg-bluefigma2"></div>
                    <span className="absolute bottom-0 text-xs font-bold">Dicción</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-5 group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">40%</span>
                    <div className="relative flex justify-center w-16 h-40 rounded-lg bg-bluefigma1"></div>
                    <span className="absolute bottom-0 text-xs font-bold">Vocabulario</span>
                </div>
            </div>
        </div>
        
    </body>
    );
  }
  export default Chart;