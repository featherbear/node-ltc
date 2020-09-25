const ffi = require('ffi-napi')

// Library: /usr/local/lib/libltc.so
module.exports = ffi.Library('./build/Release/libltc', require('./lib/functions/'))
