const createEnum = data => {
  if (Array.isArray(data)) {
    data = data.reduce((obj, key, idx) => ({ ...obj, [key]: idx }), {})
  }
  data.type = 'int'
  return data
}

module.exports = {
  LTC_TV_STANDARD: createEnum([
    'LTC_TV_525_60',
    'LTC_TV_625_50',
    'LTC_TV_1125_60',
    'LTC_TV_FILM_24'
  ]),

  LTC_BG_FLAGS: createEnum({
    LTC_USE_DATE: 1,
    LTC_TC_CLOCK: 2,
    LTC_BGF_DONT_TOUCH: 4,
    LTC_NO_PARITY: 8
  })
}
