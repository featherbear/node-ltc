const { createEnumFromArray } = require('./_utils')

module.exports = {
  LTC_TV_STANDARD: createEnumFromArray([
    'LTC_TV_525_60',
    'LTC_TV_625_50',
    'LTC_TV_1125_60',
    'LTC_TV_FILM_24'
  ]),

  LTC_BG_FLAGS: createEnumFromArray({
    LTC_USE_DATE: 1,
    LTC_TC_CLOCK: 2,
    LTC_BGF_DONT_TOUCH: 4,
    LTC_NO_PARITY: 8
  })
}
