const types = require('../types')
const {
  LTCFrameExtPtr,
  LTCDecoderPtr,
  ltcsnd_sample_tPtr,
  ltc_off_t
} = require('../types')

module.exports = {
  ltc_decoder_create: [LTCDecoderPtr, ['int', 'int']],
  ltc_decoder_free: ['int', [LTCDecoderPtr]],
  ltc_decoder_write: [
    'void',
    [LTCDecoderPtr, ltcsnd_sample_tPtr, 'size_t', ltc_off_t]
  ],
  ltc_decoder_write_float: [
    'void',
    [LTCDecoderPtr, 'float*', 'size_t', ltc_off_t]
  ],
  ltc_decoder_write_s16: [
    'void',
    [LTCDecoderPtr, 'short*', 'size_t', ltc_off_t]
  ],
  ltc_decoder_write_u16: [
    'void',
    [LTCDecoderPtr, 'unsigned short*', 'size_t', ltc_off_t]
  ],
  ltc_decoder_write_u16: ['int', [LTCDecoderPtr, LTCFrameExtPtr]],
  ltc_decoder_queue_flush: ['void', [LTCDecoderPtr]],
  ltc_decoder_queue_length: ['int', [LTCDecoderPtr]]
}
