const ref = require('ref')
const { ltcsnd_sample_t } = require('./types')
const { createArrayOfSizeType } = require('./types/_utils')

module.exports.createSoundBuffer = size =>
  ref.alloc(createArrayOfSizeType(ltcsnd_sample_t, size))
