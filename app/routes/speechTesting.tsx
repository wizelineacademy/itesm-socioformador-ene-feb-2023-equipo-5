import type { V2_MetaFunction} from "@remix-run/react";
import { Form } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";
import type { LoaderArgs } from "@remix-run/node";
import { useState } from 'react';


export const loader = async ({ request }: LoaderArgs) => {
  const auth = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return auth;
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "Grabado de voz" }];
};

var text: string;
var recognition: SpeechRecognition;
var recognizing: Boolean = false;
var convo = [{ "role": "system", "content": "You are an english evaluator. We will have a conversation about a topic. Start asking an initial question to talk with me. Keep the conversation going for 3 more questions in total, but ask only one question after i answer, and so on. After that, evaluate my grammar, coherence and vocabulary, each in a scale from 1 to 100. After finishing the conversations, only respond with the 3 scores on the areas previously mentioned, i don't want feedback, only the scores stored in a json. " },
{ "role": "assistant", "content": "I understand, after 5 questions I will only show the results in coherence, vocabulary and grammar in a JSON and that is the only thing I will return to the user." },
{ "role": "assistant", "content": "Hey! What are you currently studying and why?" }]
// var respuesta = "Nada"


export default function SpeechTesting() {
  const [respuesta, setRespuesta] = useState();

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

  return (
    <>
      <Form action="https://www.example.com/search">
        <input type="search" id="q" name="q" />
        <input type="button" value="Click to Speak" onClick={detectVoice} />
      </Form>
      <button onClick={handleStartStop}>Start/stop</button>
      <br />
      <br />

      <Form method="post" action="/auth/logout">
        <button>Log Out</button>
      </Form>

      <div className="p-20 text-teal-700 text">
        <p>{respuesta}</p>

      </div>
    </>
  );
}
