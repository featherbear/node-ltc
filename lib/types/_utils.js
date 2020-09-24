const ref = require('ref')

const createArrayOfSizeType = (type, count) => ({
  size: type.size * count,
  indirection: 1,
  get (buffer, offset) {
    const result = []
    for (let i = 0; i < count; i++) {
      result.push(ref.get(buffer, offset + i * type.size, type))
    }
    return result
  },
  set (buffer, offset, value) {
    buffer.write(value, offset)
  },
  alignment: 1
})

const createStringOfSizeType = (count) => {
  const type = createArrayOfSizeType(ref.types.char, count)
  type.get = (buffer, offset) => buffer.slice(offset).toString()
  return type
}

const createEnumFromArray = data => {
  if (Array.isArray(data)) {
    data = data.reduce((obj, key, idx) => ({ ...obj, [key]: idx }), {})
  }
  data.type = 'int'
  return data
}

const createPointersForArrayOfTypes = types =>
  Object.entries(types).reduce(
    (obj, [key, val]) => ({
      ...obj,
      [key]: val,
      [key + 'Ptr']: ref.refType(val)
    }),
    {}
  )

module.exports = {
  createArrayOfSizeType,
  createStringOfSizeType,
  createEnumFromArray,
  createPointersForArrayOfTypes
}
