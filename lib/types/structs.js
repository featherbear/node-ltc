const ref = require('ref')
const Struct = require('ref-struct')
const ArrayType = require('ref-array')

let structs = {
  LTCEncoder: ref.types.void,
  LTCDecoder: ref.types.void,
  SMPTETimecode: Struct({
    days: ref.types.uchar,
    frame: ref.types.uchar,
    hours: ref.types.uchar,
    mins: ref.types.uchar,
    months: ref.types.uchar,
    secs: ref.types.uchar,
    years: ref.types.uchar,
    timezone0: ref.types.char,
    timezone1: ref.types.char,
    timezone2: ref.types.char,
    timezone3: ref.types.char,
    timezone4: ref.types.char,
    timezone5: ref.types.char

  }),
  LTCFrameExt: ref.types.void,
  LTCFrame: ref.types.void
}

structs = Object.entries(structs).reduce(
  (obj, [key, val]) => ({
    ...obj,
    [key]: val,
    [key + 'Ptr']: ref.refType(val)
  }),
  {}
)
module.exports = structs
