import video from "../../../public/img/video.png";
import IA from "./IA";
import Progress from "./Progress";
import Section from "./Section";
import Camera from "./Camera";
import React, { useCallback, useRef, useState } from "react";
import Webcam, { WebcamProps } from "react-webcam";

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
  }, [mediaRecorderRef, setCapturing]);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style.display = "none";
      a.href = url;
      a.download = "react-webcam-stream-capture.mp4";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  const videoConstraints: WebcamProps["videoConstraints"] = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  return (
    <div className="mx-auto w-4/6">
      <div className="bg-white rounded-lg p-4 my-10 flex items-center">
        <div className="webcam-contaainer">
          <Webcam
            height={400}
            width={400}
            audio={false}
            mirrored={true}
            ref={webcamRef}
            videoConstraints={videoConstraints}
          />
          {capturing ? (
            <button onClick={handleStopCaptureClick}>Stop Capture</button>
          ) : (
            <button onClick={handleStartCaptureClick}>Start Capture</button>
          )}
          {recordedChunks.length > 0 && (
            <button onClick={handleDownload}>Download</button>
          )}
        </div>
        <IA />
      </div>
      <div className="bg-white rounded-lg p-4 my-10 flex items-center">
        <Progress checked={true} />
        <Section texto="Grammar section"></Section>
      </div>
    </div>
  );
}

export default Video;
