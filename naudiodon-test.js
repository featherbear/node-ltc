const portAudio = require('naudiodon')

let inputDevices = portAudio.getDevices().filter(({maxInputChannels: inputs}) => inputs > 0)
console.log(inputDevices.find(({name})=>name=="HDA Intel PCH: ALC3253 Analog (hw:0,0)"));

// Create an instance of AudioIO with inOptions (defaults are as below), which will return a ReadableStream
const fs = require('fs')
var ai = new portAudio.AudioIO({
    inOptions: {
      channelCount: 2,
      sampleFormat: portAudio.SampleFormat16Bit,
      sampleRate: 44100,
      deviceId: -1, // Use -1 or omit the deviceId to select the default device
      closeOnError: true // Close the stream if an audio error is detected, if set false then just log the error
    }
  });
  
  // Create a write stream to write out to a raw audio file
  var ws = fs.createWriteStream('rawAudio.raw');
  
  //Start streaming
  ai.pipe(ws);
  ai.start();