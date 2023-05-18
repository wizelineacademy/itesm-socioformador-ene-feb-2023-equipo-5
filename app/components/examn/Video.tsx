import { useState } from "react";
import IA from "../../../public/img/IA.png";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

var text: string;
var recognition: SpeechRecognition;
var recognizing: Boolean = false;
var convo = [{ "role": "system", "content": "You are an english evaluator. We will have a conversation about a topic. Start asking an initial question to talk with me. Keep the conversation going for 3 more questions in total, but ask only one question after i answer, and so on. After that, evaluate my grammar, coherence and vocabulary, each in a scale from 1 to 100. After finishing the conversations, only respond with the 3 scores on the areas previously mentioned, i don't want feedback, only the scores stored in a json. " },
{ "role": "assistant", "content": "I understand, after 5 questions I will only show the results in coherence, vocabulary and grammar in a JSON and that is the only thing I will return to the user." },
{ "role": "assistant", "content": "Hey! What are you currently studying and why?" }]
// var respuesta = "Nada"

function Video(props: any) {

  const [respuesta, setRespuesta] = useState("");

  function detectVoice() {
    //window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognizing = false;
    //recognition.onend = reset;
    recognition.start();
    console.log("grabado");
  }

  function stopVoice() {
    recognition.stop();
    recognition.onresult = function (event) {
      if (event.results.length > 0) {
        text = event.results[0][0].transcript;
        console.log(text);
        var userResponse = { "role": "user", "content": text }
        convo.push(userResponse)
        getResponse();

      }

    };
  }

  function handleStartStop() {
    if (recognizing) {
      stopVoice();
    } else {
      detectVoice();
    }
    recognizing = !recognizing;
  }

  function getResponse() {

    fetch('http://3.220.31.142:5000/chatgpt/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "messages": convo })
    })
      .then(response => response.json())
      .then(data => {

        console.log(data["response"]);
        convo.push({ "role": "assistant", "content": data["response"] });
        setRespuesta(data.response)

      })
      .catch(error => {
        console.error(error);
      });
  }

  const [showModal, setShowModal] = useState(false);
  const [capturing, setCapturing] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const s3ClientCredentials = props.credentials

  useEffect(() => {
    const initCamera = async () => {
      try {
        const constraints = { video: true };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = function (e) {
            videoRef.current!.play();
          };
        }
      } catch (error) {
        console.log(error);
      }
    };

    initCamera();
  }, []);

  const handleStartRecording = async () => {
    setCapturing(true);
    try {
      const constraints = { audio: true, video: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);

      const recorder = new MediaRecorder(stream, videoRef.current!.srcObject!);
      recorderRef.current = recorder;

      recorder.ondataavailable = function (e) {
        chunksRef.current.push(e.data);
      };

      recorder.onstop = async function () {
        const videoBlob = new Blob(chunksRef.current, { type: "video/mp4" });
        const s3Client = new S3Client(s3ClientCredentials);

        const params = {
          Bucket: "smartspeak",
          Key: "pruebachicoITC.mp4",
          Body: videoBlob,
        };

        const command = new PutObjectCommand(params);

        try {
          const data = await s3Client.send(command);
          console.log("Archivo subido exitosamente a S3.", data);
        } catch (err) {
          console.log(err);
        }
      };
      recorder.start();
    } catch (error) {
      console.log(error);
    }
  };

  const stopRecording = () => {
    if (recorderRef.current && recorderRef.current.state === "recording") {
      recorderRef.current.stop();
      recorderRef.current.stream.getTracks().forEach((track) => track.stop());
      setShowModal(true);
    }
  };

  return (
    <div className="mx-auto w-4/6">
      <div className="bg-white rounded-lg p-4 my-10 flex items-center">
        <div className="webcam-contaainer">
          <video
            ref={videoRef}
            width={600}
            height={400}
            className="rounded-lg"
          />
          <div className="my-4">
            {capturing ? (
              <button
                className="bg-sky-200 hover:bg-sky-300 text-black font-bold py-2 px-4 rounded-full"
                onClick={stopRecording}
              >
                Stop Capture
              </button>
            ) : (
              <button
                className="bg-sky-200 hover:bg-sky-300 text-black font-bold py-2 px-4 rounded-full"
                onClick={handleStartRecording}
              >
                Start Capture
              </button>
            )}
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 my-10 mx-auto w-4/12">
          <p className="text-2xl font-bold mb-10">Presiona sobre el ícono para iniciar/detener la conversación. </p>
          <img onClick={handleStartStop} src={IA} alt={props.alt} className="mx-auto w-2/5 h-auto cursor-pointer mb-10" />
          <p className="text-xl font-semibold pb-5">Respuesta:</p>
          <p className="italic text-lg">{respuesta}</p>
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
                      dando click al botón “repetir prueba”. Si consideras que
                      tus resultados no son adecuados, podrás pedir una
                      revisión, y se te contactará en caso de haber cambios.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                    <Link to="/Instructions">
                      <button
                        className="text-blue-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Repetir prueba
                      </button>
                    </Link>

                    <Link to="/tests">
                      <button
                        className="bg-sky-900 text-white active:bg-sky-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Resultados
                      </button>
                    </Link>
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