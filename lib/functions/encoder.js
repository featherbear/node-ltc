const {
  SMPTETimecodePtr,
  LTCEncoderPtr,
  LTCFramePtr,
  LTC_TV_STANDARD
} = require('../types')

module.exports = {
  ltc_encoder_create: [
    'LTCEncoderPtr',
    ['double', 'double', LTC_TV_STANDARD.type, 'int']
  ],
  ltc_encoder_free: ['void', [LTCEncoderPtr]],
  ltc_encoder_set_timecode: ['void', [LTCEncoderPtr, SMPTETimecodePtr]],
  ltc_encoder_get_timecode: ['void', [LTCEncoderPtr, SMPTETimecodePtr]],
  ltc_encoder_set_user_bits: ['void', [LTCEncoderPtr, 'unsigned long']],
  ltc_encoder_inc_timecode: ['int', [LTCEncoderPtr]],
  ltc_encoder_dec_timecode: ['int', [LTCEncoderPtr]],
  ltc_encoder_set_frame: ['void', [LTCEncoderPtr, LTCFramePtr]],
  ltc_encoder_get_frame: ['void', [LTCEncoderPtr, LTCFramePtr]],
  ltc_encoder_get_buffer: ['int', [LTCEncoderPtr, SMPTETimecodePtr]],
  ltc_encoder_get_bufptr: [SMPTETimecodePtr, [LTCEncoderPtr, 'int*', 'int']],
  ltc_encoder_buffer_flush: ['void', [LTCEncoderPtr]],
  ltc_encoder_get_buffersize: ['size_t', [LTCEncoderPtr]],
  ltc_encoder_reinit: [
    'int',
    [LTCEncoderPtr, 'double', 'double', LTC_TV_STANDARD.type, 'int']
  ],
  ltc_encoder_reset: ['void', [LTCEncoderPtr]],
  ltc_encoder_set_bufsize: ['int', [LTCEncoderPtr, 'double', 'double']],
  ltc_encoder_set_volume: ['int', [LTCEncoderPtr, 'double']],
  ltc_encoder_set_filter: ['void', [LTCEncoderPtr, 'double']],
  ltc_encoder_encode_byte: ['int', [LTCEncoderPtr, 'int', 'double']],
  ltc_encoder_encode_frame: ['void', [LTCEncoderPtr]]
}
