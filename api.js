const ffi = require('ffi-napi')

// Library: /usr/local/lib/libltc.so
module.exports = ffi.Library('./build/Release/libltc', require('./lib/functions/'))

module.exports.types = require('./lib/types')
module.exports.util = require('./lib/util')
