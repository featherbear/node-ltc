const { LTCFrameRef, SMPTETimecodeRef, LTC_TV_STANDARD } = require('../types')

module.exports = {
  parse_bcg_flags: ['int', [LTCFrameRef, LTC_TV_STANDARD.type]],
  ltc_frame_to_time: ['void', [SMPTETimecodeRef, LTCFrameRef, 'int']],
  ltc_time_to_frame: [
    'void',
    [LTCFrameRef, SMPTETimecodeRef, LTC_TV_STANDARD.type, 'int']
  ]
}
