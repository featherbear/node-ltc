const { SMPTETimecodePtr, LTCFramePtr, LTC_TV_STANDARD, ltc_off_t } = require('../types')

module.exports = {
  ltc_frame_to_time: ['void', [SMPTETimecodePtr, LTCFramePtr, 'int']],
  ltc_time_to_frame: [
    'void',
    [LTCFramePtr, SMPTETimecodePtr, LTC_TV_STANDARD.type, 'int']
  ],
  ltc_frame_reset: ['void', [LTCFramePtr]],
  ltc_frame_increment: [
    'int',
    [LTCFramePtr, 'int', LTC_TV_STANDARD.type, 'int']
  ],
  ltc_frame_decrement: [
    'int',
    [LTCFramePtr, 'int', LTC_TV_STANDARD.type, 'int']
  ],
  ltc_frame_set_parity: ['void', [LTCFramePtr, LTC_TV_STANDARD.type]],
  ltc_frame_alignment: [ltc_off_t, ['double', LTC_TV_STANDARD.type]],
  ltc_frame_get_user_bits: ['ulong', [LTCFramePtr]],
  ltc_frame_parse_bcg_flags: ['int', [LTCFramePtr, LTC_TV_STANDARD.type]],
  ltc_frame_to_time: ['void', [SMPTETimecodePtr, LTCFramePtr, 'int']],
  ltc_time_to_frame: [
    'void',
    [LTCFramePtr, SMPTETimecodePtr, LTC_TV_STANDARD.type, 'int']
  ]
}
