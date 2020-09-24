const ref = require('ref')
const { set } = require('ref-napi')
const Struct = require('ref-struct')

const createArrayOfType = (type, count) => ({
  size: ((type && type.size) ? type.size : 1) * count,
  indirection: 1,
  get (buffer, offset) {
    return buffer.slice(offset)
  },
  set (buffer, offset, value) {
    buffer.write(value, offset)
  },
  alignment: 1
})

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
    timezone: createArrayOfType(ref.types.char, 6)
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
