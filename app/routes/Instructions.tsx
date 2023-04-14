
export default function Result() {
  return (
    <>
        <div className="content-center	 flex-row mt-14 mx-40 ">
            <div className=" mx-40 bg-graybgfigma">
                <div  className=" py-14 ">
                    <p className="text-center flex-row mt-4 mx-20 font-bold">INSTRUCCIONES</p>
                    <p className="text-center  flex-row mt-4 mx-20 ">La prueba consiste en una conversación en tiempo real, por lo que deberás hacer click en el botón azul al iniciar y terminar de grabar para que tus respuestas sean procesadas. Para los resultados se tienen en consideración los siguientes puntos:</p>
                    <div className=" mx-20 mt-10">
                    <svg className=" float-left  h-8 w-8 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                     </svg>
                     <p className="flex-row mx-10 ">Grammar</p>
                     </div>
                     <div className=" mx-20 mt-10">
                     <svg className=" float-left  h-8 w-8 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                     </svg>
                     <p className="flex-row mx-10 ">Speaking</p>
                     </div>
                     <div className=" mx-20 mt-10">
                     <svg className=" float-left  h-8 w-8 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                     </svg>
                     <p className="flex-row mx-10 ">comprehension</p>
                     </div>
                     <div className=" mx-20 mt-10">
                     <svg className=" float-left  h-8 w-8 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                     </svg>
                     <p className="flex-row mx-10 ">Technical Language</p>
                    </div>
                    
                </div>
                <div className="flex flex-col items-center">
                <button className="mb-10 py-2 w-40 rounded-md bg-blue-200 shadow-md">Comenzar prueba</button>
                </div>    
            </div>
            
        </div>
        </>
  );
}
