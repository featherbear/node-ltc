const ref = require('ref')
const { createPointersForArrayOfTypes } = require('./_utils')

let typedefs = {
  ltcsnd_sample_t: ref.types.uchar,
  ltc_off_t: ref.types.longlong
}

typedefs = createPointersForArrayOfTypes(typedefs)
module.exports = typedefs
