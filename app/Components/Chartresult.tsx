function Chart() {
    return (
        <body className="flex flex-col items-center justify-center w-screen h-screen px-10 py-20 text-gray-700 bg-gray-100">

     
        <div className="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
            <h2 className="text-xl font-bold">Monthly Revenue</h2>
            <span className="text-sm font-semibold text-gray-500">2020</span>
            <div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
                <div className="relative flex flex-col items-center flex-grow pb-5 group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$37,500</span>
                    <div className="relative flex justify-center w-full h-10 bg-graybgfigma"></div>
                    <div className="relative flex justify-center w-full h-96 bg-bluefigma1"></div>
                    <span className="absolute bottom-0 text-xs font-bold">Lectura</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-5 group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$45,000</span>
                    <div className="relative flex justify-center w-full h-36 bg-bluefigma2"></div>
                    <span className="absolute bottom-0 text-xs font-bold">Escritura</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-5 group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$47,500</span>
                    <div className="relative flex justify-center w-full h-24 bg-bluefigma3"></div>
                    <span className="absolute bottom-0 text-xs font-bold">Escuchar</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-5 group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$50,000</span>
                    <div className="relative flex justify-center w-full h-10 bg-bluefigma4"></div>
                    <span className="absolute bottom-0 text-xs font-bold">Gramática</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-5 group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$47,500</span>
                    <div className="relative flex justify-center w-full h-20 bg-bluefigma5"></div>
                    <span className="absolute bottom-0 text-xs font-bold">Dicción</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-5 group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$55,000</span>
                    <div className="relative flex justify-center w-full h-16 bg-bluefigma6"></div>
                    <span className="absolute bottom-0 text-xs font-bold">Vocabulario</span>
                </div>
            </div>
        </div>
        
    </body>
    );
  }
  export default Chart;