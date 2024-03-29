import { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Form } from "@remix-run/react";
import micOff from "../../../public/img/microfono.png";
import micOn from "../../../public/img/grabando.png";
import loading from "../../../public/img/load.gif";
import play from "../../../public/img/play.png";
import { defaultConfig } from "~/modules/speechSynthesis";

var text: string;
var recognition: SpeechRecognition;
var recognizing: Boolean = false;
var convo = [
  {
    role: "system",
    content:
      "You are an english evaluator. We will have a conversation about a topic. Start asking an initial question to talk with me. Keep the conversation going for 3 more questions in total, but ask only one question after i answer, and so on. After that, evaluate my grammar, coherence and vocabulary, each in a scale from 1 to 100. After finishing the conversations, only respond with the 3 scores on the areas previously mentioned, i don't want feedback, only the scores stored in a json. ",
  },
  {
    role: "assistant",
    content:
      "I understand, after 5 questions I will only show the results in coherence, vocabulary and grammar in a JSON and that is the only thing I will return to the user.",
  },
];
// var respuesta = "Nada"
var questions: number = 0;

function Video(props: any) {
  const [respuesta, setRespuesta] = useState("");
  const [imgButton, setImgButton] = useState(false);
  const [pastAnswer, setPastAnswer] = useState("Inicial");

  useEffect(() => {
    if (pastAnswer != respuesta) {
      const speakAsync = async () => {
        await speak(respuesta);
      };
      speakAsync();
    }
  }, [pastAnswer, respuesta]);

  convo.push({
    role: "assistant",
    content: props.question.situation,
  });


  function detectVoice() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognizing = false;
    recognition.start();
  }

  function stopVoice() {
    recognition.stop();
    recognition.onresult = function (event) {
      if (event.results.length > 0) {
        questions += 1;
        text = event.results[0][0].transcript;
        var userResponse = { role: "user", content: text };
        convo.push(userResponse);

        if (questions == 5) {
          convo.push({
            role: "assistant",
            content:
              "The conversation has finished. Based on the answers I gave you, generate a JSON with the key 'data' with 6 fields: Grammar, Coherence, Vocabulary, Feedback, Recommendations and English_Level. The first three fields must be evaluated in a scale from 1 to 100, the feedback must be a paragraph of my overall performance and the English_Level field must be either A1, A2, B1, B2, C1 or C2. You can take this definitions as a guide to assign a level:  A1 (Beginner): The person demonstrates a limited vocabulary, uses basic sentence structures, and shows the ability to understand and produce simple and coherent texts.A2 (Elementary): The person exhibits an expanded vocabulary, utilizes past and future tenses, and is capable of comprehending short texts and producing coherent responses with basic language proficiency. B1 (Intermediate): The person showcases a wider range of vocabulary, employs accurate tenses and more complex sentence structures, comprehends straightforward texts, and expresses ideas with moderate coherence and linguistic accuracy. B2 (Upper Intermediate): The person demonstrates an extended vocabulary, proficient use of tenses and complex structures, can comprehend articles and reports, and communicates ideas effectively with a good level of coherence and linguistic accuracy.C1 (Advanced): The person possesses a broad vocabulary, utilizes advanced grammar structures accurately, comprehends complex texts effectively, and communicates ideas coherently with a high level of linguistic accuracy.C2 (Proficient): The person exhibits an extensive vocabulary, demonstrates near-native grammar proficiency, comprehends specialized and challenging texts proficiently, and communicates ideas with exceptional coherence, linguistic accuracy, and sophistication. The Recommendations field must be a string of 3 specific recommendations that the user could have done to improve his phrasing referring to what he said, in this recommendations mention specific words or sentences that could have been changed..",
          });
        }

        getResponse();
      }
    };
  }

  function handleStartStop() {
    if (recognizing) {
      setImgButton(false);
      // setRecording(false);
      stopVoice();
    } else {
      setImgButton(true);
      // setRecording(true);
      detectVoice();
    }
    recognizing = !recognizing;
  }

  function getResponse() {
    setPastAnswer(respuesta);
    // setResponseReceived(false);
    fetch(
      "https://chatgpt.lcuoodnsn630q.us-east-1.cs.amazonlightsail.com/chatgpt/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: convo }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const response = data["response"];
        convo.push({ role: "assistant", content: response });
        setRespuesta(response);
        // setResponseReceived(true);
        if (questions == 5) {
          stopRecording();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  async function speak(text: string) {
    // Create a speech synthesis instance
    const synth = window.speechSynthesis;

    // Set up the default configuration
    let config = { ...defaultConfig };

    // Create a Promise that resolves when the voiceschanged event fires
    let voicesChanged: Promise<void>;

    // Stop any ongoing speech
    synth.cancel();
    // Remove any previous event listener
    synth.onvoiceschanged = null;

    if (synth.getVoices().length > 0) {
      voicesChanged = Promise.resolve();
    } else {
      voicesChanged = new Promise<void>((resolve) => {
        synth.onvoiceschanged = () => {
          resolve();
        };
      });
    }

    // Wait for the voiceschanged event to be fired
    await voicesChanged;

    // Find the desired voice
    const voiceName = "Google US English";
    let voices = synth.getVoices();
    const voice = voices.find((voice) => voice.name === voiceName);
    if (voice) config.voice = voice;

    // Create the utterance and set the configuration values
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.rate = config.rate;
    utterance.pitch = config.pitch;
    utterance.volume = config.volume;
    utterance.voice = config.voice;

    console.log(utterance);

    // Speak the utterance
    synth.speak(utterance);
  }
  const [showModal, setShowModal] = useState(false);
  // const [capturing, setCapturing] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const s3ClientCredentials = props.credentials;

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
    setPastAnswer("PostInitial");
    try {
      const constraints = { audio: true, video: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      // const recorder = new MediaRecorder(stream, videoRef.current!.srcObject)
      const recorder = new MediaRecorder(stream);
      recorderRef.current = recorder;

      recorder.ondataavailable = function (e) {
        chunksRef.current.push(e.data);
      };

      recorder.onstop = async function () {
        const videoBlob = new Blob(chunksRef.current, { type: "video/mp4" });
        const s3Client = new S3Client(s3ClientCredentials);
        const params = {
          Bucket: "smartspeak",
          Key: props.urlVideo,
          Body: videoBlob,
        };

        const command = new PutObjectCommand(params);

        try {
          // const data = await s3Client.send(command);
          await s3Client.send(command);
          // console.log("Archivo subido exitosamente a S3.", data);
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
        </div>
        <div className="bg-white rounded-lg p-4 my-10 mx-auto w-4/12">
          <div className="my-4">
            <p className="text-2xl font-bold mb-10">
              Click on the icon to start/stop the conversation.{" "}
            </p>
            {/* {pastAnswer == respuesta ? (<div>Pensando</div>) : <div>No pensando</div>} */}
            {pastAnswer == "Inicial" ? (
              <>
                <p>Click on the icon to start the exam</p>
                <img
                  onClick={handleStartRecording}
                  src={play}
                  alt={props.alt}
                  className="mx-auto w-1/5 h-auto cursor-pointer mb-10"
                />
              </>
            ) : (
              <>
                {imgButton === false ? (
                  <>
                    {pastAnswer == respuesta ? (
                      <img
                        src={loading}
                        alt={props.alt}
                        className="mx-auto w-1/5 h-auto mb-10"
                      />
                    ) : (
                      <img
                        onClick={handleStartStop}
                        src={micOff}
                        alt={props.alt}
                        className="mx-auto w-1/5 h-auto cursor-pointer mb-10"
                      />
                    )}
                  </>
                ) : (
                  <>
                    <img
                      onClick={handleStartStop}
                      src={micOn}
                      alt={props.alt}
                      className="mx-auto w-1/5 h-auto cursor-pointer mb-10"
                    />
                    <p>Recording...</p>
                  </>
                )}
              </>
            )}

            {/* {questions == 5 ? (
              <Form method="POST">
                <input type="hidden" name="answer" value={respuesta} />
                <button
                  className="bg-sky-200 hover:bg-sky-300 text-black font-bold py-2 px-4 rounded-full"
                  type="submit"
                  onClick={stopRecording}
                >
                  Stop Capture
                </button>
              </Form>
            ) : null} */}
          </div>
          {questions == 5 ? null : (
            <>
              <p className="text-xl font-semibold pb-5">Answer:</p>
              <p className="italic text-lg">{respuesta}</p>
            </>
          )}
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
                      Your test results will appear below. remember that if you
                      want to do it you can do it clicking the "repeat test"
                      button. If you consider that your results are not
                      adequate, you can request a review, and you will be
                      contacted if there are any changes.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                    {/* <Link to="/instructions">
                      <button
                        className="text-blue-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Repeat test
                      </button>
                    </Link> */}

                    {/* <Link to="/tests"> */}
                    <Form method="POST">
                      <input
                        type="hidden"
                        name="userid"
                        value={props.profile.id}
                      />
                      <input
                        type="hidden"
                        name="situationid"
                        value={props.question.id}
                      />
                      <input type="hidden" name="url" value={props.urlVideo} />
                      <input type="hidden" name="answer" value={respuesta} />
                      <button
                        className="bg-sky-900 text-white active:bg-sky-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        // onClick={stopRecording}
                      >
                        Results
                      </button>
                    </Form>
                    {/* </Link> */}
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
