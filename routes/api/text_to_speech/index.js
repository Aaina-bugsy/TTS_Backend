const express = require("express")
const router = express.Router()
const libFunction = require("./../../../helpers/libFunction")
const textToSpeechController = require("./text_to_speech.controller")

// Route for converting text to speech
router.post("/convert_text_to_speech", textToSpeechController.convertTextToSpeechController);

// Route for listing supported languages and voices
router.get("/list_languages_voices", textToSpeechController.listLanguagesAndVoicesController);

// setTimeout(async() => {
    
//     // Example usage
//     // let currentTimeStamp = await libFunction.getCurrentTimeStamp()
//     // const outputFileName = path.join(__dirname, '..', '..', '..', 'public', 'output', `output-${currentTimeStamp.replaceAll(" ", "_").replaceAll(":", "_")}.mp3`);

//     // await googleApi.convertTextToSpeech( 'Hello, My name is Vidhi Thakkar. This is a test message!', 'en-GB', 'MALE', 1, 2, 'en-GB-Wavenet-B', outputFileName);

//     await googleApi.getTextToSpeechLanguagesAndVoices()

// }, 1000)

module.exports = router