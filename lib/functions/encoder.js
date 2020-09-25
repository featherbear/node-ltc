const {
  SMPTETimecodePtr,
  LTCEncoderPtr,
  LTC_TV_STANDARD,
  ltcsnd_sample_tRef
} = require('../types')

module.exports = {
  ltc_encoder_create: [
    'LTCEncoderRef',
    ['double', 'double', LTC_TV_STANDARD.type, 'int']
  ],
  ltc_encoder_free: ['void', [LTCEncoderRef]],
  ltc_encoder_set_timecode: ['void', [LTCEncoderRef, SMPTETimecodeRef]],
  ltc_encoder_get_timecode: ['void', [LTCEncoderRef, SMPTETimecodeRef]],
  ltc_encoder_set_user_bits: ['void', [LTCEncoderRef, 'unsigned long']],
  ltc_encoder_inc_timecode: ['int', [LTCEncoderRef]],
  ltc_encoder_dec_timecode: ['int', [LTCEncoderRef]],
  ltc_encoder_set_frame: ['void', [LTCEncoderRef, LTCFrameRef]],
  ltc_encoder_get_frame: ['void', [LTCEncoderRef, LTCFrameRef]],
  ltc_encoder_get_buffer: ['int', [LTCEncoderRef, ltcsnd_sample_tRef]],
  ltc_encoder_get_bufptr: [ltcsnd_sample_tRef, [LTCEncoderRef, 'int*', 'int']],
  ltc_encoder_buffer_flush: ['void', [LTCEncoderRef]],
  ltc_encoder_get_buffersize: ['size_t', [LTCEncoderRef]],
  ltc_encoder_reinit: [
    'int',
    [LTCEncoderRef, 'double', 'double', LTC_TV_STANDARD.type, 'int']
  ],
  ltc_encoder_reset: ['void', [LTCEncoderRef]],
  ltc_encoder_set_bufsize: ['int', [LTCEncoderRef, 'double', 'double']],
  ltc_encoder_set_volume: ['int', [LTCEncoderRef, 'double']],
  ltc_encoder_set_filter: ['void', [LTCEncoderRef, 'double']],
  ltc_encoder_encode_byte: ['int', [LTCEncoderRef, 'int', 'double']],
  ltc_encoder_encode_frame: ['void', [LTCEncoderRef]]
}
