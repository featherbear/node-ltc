const { SMPTETimecodeRef, LTCFrameRef, LTC_TV_STANDARD } = require('../types')

module.exports = {
  ltc_frame_to_time: ['void', [SMPTETimecodeRef, LTCFrameRef, 'int']],
  ltc_time_to_frame: [
    'void',
    [LTCFrameRef, SMPTETimecodeRef, LTC_TV_STANDARD.type, 'int']
  ],
  ltc_frame_reset: ['void', [LTCFrameRef]],
  ltc_frame_increment: [
    'int',
    [LTCFrameRef, 'int', LTC_TV_STANDARD.type, 'int']
  ],
  ltc_frame_decrement: [
    'int',
    [LTCFrameRef, 'int', LTC_TV_STANDARD.type, 'int']
  ],
  ltc_frame_set_parity: ['void', [LTCFrameRef, LTC_TV_STANDARD.type]],
  ltc_frame_alignment: ['ltc_off_t', ['double', LTC_TV_STANDARD.type]],
  ltc_frame_get_user_bits: ['ulong', [LTCFrameRef]]
}
