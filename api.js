const ffi = require('ffi-napi')

// Library: /usr/local/lib/libltc.so
module.exports = ffi.Library('libltc', require('./lib/functions'))
