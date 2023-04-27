import { V2_MetaFunction, Form } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";
import type { LoaderArgs } from "@remix-run/node";

export const loader = async ({ request }: LoaderArgs) => {
    await authenticator.isAuthenticated(request, {
        failureRedirect: "/",
    });
};

export const meta: V2_MetaFunction = () => {
    return [{ title: "Grabado de voz" }];
};

var text:String = "";
var recognition:SpeechRecognition
var recognizing:Boolean = false

function detectVoice() {
    //window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognizing = false
    //recognition.onend = reset;
    recognition.start()
    console.log("grabado")
}

function stopVoice() {
    recognition.stop()
    recognition.onresult = function(event) {
        if (event.results.length > 0) {
          text = event.results[0][0].transcript;
          console.log(text)
        }
    }
}

function handleStartStop() {
    if(recognizing){
        stopVoice()
        //Aqui se manda al servidor lo que se detecto
    } else {
        detectVoice()
    }
    recognizing = !recognizing
}

export default function speechTesting() {
    return(
        <>  
            <p>{text}</p>
            <Form action="https://www.example.com/search">
                <input type="search" id="q" name="q" />
                <input type="button" value="Click to Speak" onClick = {detectVoice} />
            </Form>
            <button onClick={handleStartStop}>Start/stop</button>
            <br/><br/>

            <Form method="post" action="/auth/logout">
                <button>Log Out</button>
            </Form>
        </>
    )
}