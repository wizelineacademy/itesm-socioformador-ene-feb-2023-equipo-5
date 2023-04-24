import { V2_MetaFunction, useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
    return [{ title: "Login" }];
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
    } else {
        detectVoice()
    }
    recognizing = !recognizing
}

export default function speechTesting() {
    return(
        <>  
            <p>{text}</p>
            <form action="https://www.example.com/search">
                <input type="search" id="q" name="q" />
                <input type="button" value="Click to Speak" onClick = {detectVoice} />
            </form>
            <button onClick={handleStartStop}>Start/stop</button>
        </>
    )
}