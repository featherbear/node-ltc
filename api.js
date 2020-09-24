const ffi = require('ffi-napi')

const types = require('./lib/types')

// Library: /usr/local/lib/libltc.so
module.exports = ffi.Library('libltc', {
  ltc_encoder_create: [types.structs.LTCEncoderPtr, ['double', 'double', types.enums.LTC_TV_STANDARD.type, 'int']],
  ltc_encoder_set_timecode: ['void', [types.structs.LTCEncoderPtr, types.structs.SMPTETimecodePtr]],
  ltc_encoder_get_timecode: ['void', [types.structs.LTCEncoderPtr, types.structs.SMPTETimecodePtr]],
  ltc_encoder_inc_timecode: ['void', [types.structs.LTCEncoderPtr]]

})
module.exports.types = types

/*
// You can also access just functions in the current process by passing a null
  var current = ffi.Library(null, {
    'atoi': [ 'int', [ 'string' ] ],
    'puts': [ 'void', [ 'string' ] ],
  });
  //current.atoi('1234'); // 1234
  current.puts('aa');
*/
