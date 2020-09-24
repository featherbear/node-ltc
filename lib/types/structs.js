const ref = require('ref')
const Struct = require('ref-struct')
const { createStringOfSizeType, createPointersForArrayOfTypes } = require('./_utils')

let structs = {
  LTCEncoder: ref.types.void,
  LTCDecoder: ref.types.void,
  SMPTETimecode: Struct({
    timezone: createStringOfSizeType(6, true),
    years: ref.types.uchar,
    months: ref.types.uchar,
    days: ref.types.uchar,

    hours: ref.types.uchar,
    mins: ref.types.uchar,
    secs: ref.types.uchar,
    frame: ref.types.uchar
  }),
  LTCFrameExt: ref.types.void,
  LTCFrame: ref.types.void
}

structs = createPointersForArrayOfTypes(structs)
module.exports = structs
