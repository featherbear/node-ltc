const { LTCFramePtr, SMPTETimecodePtr, LTC_TV_STANDARD } = require('../types')

module.exports = {
  parse_bcg_flags: ['int', [LTCFramePtr, LTC_TV_STANDARD.type]],
  ltc_frame_to_time: ['void', [SMPTETimecodePtr, LTCFramePtr, 'int']],
  ltc_time_to_frame: [
    'void',
    [LTCFramePtr, SMPTETimecodePtr, LTC_TV_STANDARD.type, 'int']
  ]
}
