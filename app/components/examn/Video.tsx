import Progress from "./Progress";
import Section from "./Section";
import React, { useCallback, useRef, useState } from "react";
import Webcam, { WebcamProps } from "react-webcam";
import IA from "../../../public/img/IA.png";

interface RecordedChunk {
  size: number;
  type: string;
  slice(start?: number, end?: number, contentType?: string): Blob;
}

function Video(props: any) {
  const webcamRef = useRef<Webcam>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState<RecordedChunk[]>([]);
  const [showModal, setShowModal] = React.useState(false);

  const handleDataAvailable = useCallback(
    ({ data }: { data: Blob }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
        console.log(data.size)

        
        const url = URL.createObjectURL(data);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.download = "react-webcam-stream-capture.webm";
        a.click();
        window.URL.revokeObjectURL(url);
        setRecordedChunks([]);
      }
    },
    [setRecordedChunks, recordedChunks]
  );

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current?.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

  const handleStopSpecialCaptureClick = useCallback(() => {
    handleStopCaptureClick()
    handleDownload()
    setShowModal(true)
  }, [mediaRecorderRef, setCapturing]);

  const handleStopSpecial2CaptureClick = () => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  };

  const handleStopCaptureClick = useCallback(() => {
    handleStopSpecial2CaptureClick(mediaRecorderRef)
    setCapturing(false);
    
  }, [mediaRecorderRef, setCapturing]);

  const handleSpecialDownload = (recordedChunks) => {
    console.log(recordedChunks.length)

    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  };

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
      
    }
  }, [recordedChunks]);

  const videoConstraints: WebcamProps["videoConstraints"] = {
    width: 620,
    height: 420,
    facingMode: "user",
  };

  const audioConstraints: WebcamProps["audioConstraints"]= {
    //suppressLocalAudioPlayback: true,
    noiseSuppression: true,
    echoCancellation: true,
  };

  return (
    
    <div className="mx-auto w-4/6">
      <div className="bg-white rounded-lg p-4 my-10 flex items-center">
        <div className="webcam-contaainer">
          <Webcam
            height={500}
            width={600}
            audio={true}
            muted={true}
            mirrored={true}
            ref={webcamRef}
            videoConstraints={videoConstraints}
            audioConstraints={audioConstraints}
            className="rounded-lg"
          />
          <div className="my-4">
            {capturing ? (
              <button
                className="bg-sky-200 hover:bg-sky-300 text-black font-bold py-2 px-4 rounded-full"
                onClick={handleStopSpecialCaptureClick}
              >
                Stop Capture
              </button>
            ) : (
              <button
                className="bg-sky-200 hover:bg-sky-300 text-black font-bold py-2 px-4 rounded-full"
                onClick={handleStartCaptureClick}
              >
                Start Capture
              </button>
            )}
            {recordedChunks.length > 0 && (
              <button onClick={handleDownload}>Download</button>
            )}
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 my-10 mx-auto w-4/12">
          <img src={IA} alt={props.alt} className="mx-auto w-2/5 h-auto" />
        </div>{" "}
      </div>


      <>
      
      {showModal ? (
        <>
          <div className="backdrop-blur-sm bg-white/30 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-sky-100 outline-none focus:outline-none">                
                {/*body*/}
                <div className="relative p-6 flex-auto mx-10">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    A continuación aparecerán los resultados de tu prueba,
                    recuerda que en caso de querer realizarla podrás hacerlo
                    dando click al botón “repetir prueba”. Si consideras que tus
                    resultados no son adecuados, podrás pedir una revisión, y se
                    te contactará en caso de haber cambios.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-blue-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Repetir prueba
                  </button>
                  <button
                    className="bg-sky-900 text-white active:bg-sky-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Resultados
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
    </div>

    
  );
}

export default Video;
