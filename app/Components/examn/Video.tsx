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

  const handleDataAvailable = useCallback(
    ({ data }: { data: Blob }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
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

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current?.stop();
    setCapturing(false);
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style.display = "none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [mediaRecorderRef, setCapturing, recordedChunks]);

  const videoConstraints: WebcamProps["videoConstraints"] = {
    width: 620,
    height: 420,
    facingMode: "user",
  };

  return (
    <div className="mx-auto w-4/6">
      <div className="bg-white rounded-lg p-4 my-10 flex items-center">
        <div className="webcam-contaainer">
          <Webcam
            height={500}
            width={600}
            audio={false}
            mirrored={true}
            ref={webcamRef}
            videoConstraints={videoConstraints}
            className="rounded-lg"
          />
          <div className="my-4">
            {capturing ? (
              <button
                className="bg-sky-200 hover:bg-sky-300 text-black font-bold py-2 px-4 rounded-full"
                onClick={handleStopCaptureClick}
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
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 my-10 mx-auto w-4/12">
          <img src={IA} alt={props.alt} className="mx-auto w-2/5 h-auto" />
        </div>{" "}
      </div>
      <div className="bg-white rounded-lg p-4 my0 flex items-center">
        <Progress checked={true} />
        <Section texto="Grammar section"></Section>
      </div>
    </div>
  );
}

export default Video;
