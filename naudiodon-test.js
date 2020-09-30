const portAudio = require('./portaudioLib')

let inputDevices = portAudio.getInputDevices()

let device = inputDevices.default.find(({ id }) => id == 1)
let stream = portAudio.createStream(device)

const fs = require('fs')
var ws = fs.createWriteStream('rawAudio.raw')

stream.pipe(ws)
stream.start()

// https://www.npmjs.com/package/microphone-stream
