function initVoice(callback, error, intermedialCallback) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) {
        error({ error: "no-support" })
        return
    }

    const recog = new SpeechRecognition()

    recog.continous = true
    recog.interimResults = true

    let listening = false;
    
    function start() {
        listening = true
        recog.start?.()
        recog.onend = () => {
            console.log("...continue listening...")
            recog.start()
        }
    }

    function stop() {
        listening = false
        recog.stop?.()
        recog.onend = () => {
            console.log("Stopped listening")
        }
    }

    function toggle() {
        if (listening) stop()
        else start()
        return listening
    }

    recog.onstart = () => {
        console.log("Listening!")
    }

    let finalTranscript = ''
    recog.onresult = event => {
        let interimTranscript = ''

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) finalTranscript += transcript + ' ';
            else interimTranscript += transcript;
        }
        intermedialCallback(interimTranscript)

        callback(finalTranscript.trim())

        finalTranscript = ''
    }

    recog.onerror = event => {
        console.log("Error occurred in recognition: " + event.error)

        error({ error: event.error })
    }

    return { start, stop, toggle }
}