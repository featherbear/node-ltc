const ref = require('ref')
const Struct = require('ref-struct')
const {
  createStringOfSizeType,
  createPointersForArrayOfTypes,
  createArrayOfSizeType
} = require('./_utils')
const { ltc_off_t, ltcsnd_sample_t } = require('./typedefs')

let LTCFrame = {
  /* 80 bits */
  size: 10,
  indirection: 1,
  get (buffer, offset) {
    return buffer.slice(offset, offset + 10)
  },
  set (buffer, offset, value) {
    buffer.write(value, offset, 10)
  },
  alignment: 1
}

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
  LTCFrameExt: Struct({
    ltc: LTCFrame,
    off_start: ltc_off_t,
    off_end: ltc_off_t,
    reverse: 'int',
    biphase_tics: createArrayOfSizeType(ref.types.float, 80),
    sample_min: ltcsnd_sample_t,
    sample_max: ltcsnd_sample_t,
    volume: 'double'
  }),
  LTCFrame
}

structs = createPointersForArrayOfTypes(structs)
module.exports = structs
