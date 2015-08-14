exports.prefix = {
  'transform': ['-webkit-'],
  'transform-origin': ['-webkit-'],

  'transition': ['-webkit-'],
  'transition-delay': ['-webkit-'],
  'transition-duration': ['-webkit-'],
  'transition-property': ['-webkit-'],
  'transition-timing-function': ['-webkit-'],

  'animation': ['-webkit-'],
  'animation-delay': ['-webkit-'],
  'animation-duration': ['-webkit-'],
  'animation-fill-mode': ['-webkit-'],
  'animation-iteration-count': ['-webkit-'],
  'animation-name': ['-webkit-'],
  'animation-timing-function': ['-webkit-'],

  'user-select': ['-webkit-', '-ms-', '-moz-'],
  'placeholder': ['::-moz-', ':-ms-input-', '::-webkit-input-']
}
exports.transform = {
  'display: flex': [
    'display: -webkit-box',
    'display: -webkit-flex',
    'display: -ms-flexbox',
    'display: flex'
  ],
  'display: inline-flex': [
    'display: -webkit-inline-box',
    'display: -webkit-inline-flex',
    'display: -ms-inline-flexbox',
    'display: inline-flex'
  ],

  'flex-direction: row': [
    '-webkit-flex-direction: row',
    '-ms-flex-direction: row',
    'flex-direction: row',
    '-webkit-box-direction: normal',
    '-webkit-box-orient: vertical'
  ],
  'flex-direction: row-reverse': [
    '-webkit-flex-direction: row-reverse',
    '-ms-flex-direction: row-reverse',
    'flex-direction: row-reverse',
    '-webkit-box-direction: reverse',
    '-webkit-box-orient: horizontal'
  ],
  'flex-direction: column': [
    '-webkit-flex-direction: column',
    '-ms-flex-direction: column',
    'flex-direction: column',
    '-webkit-box-direction: normal',
    '-webkit-box-orient: vertical'
  ],
  'flex-direction: column-reverse': [
    '-webkit-flex-direction: column-reverse',
    '-ms-flex-direction: column-reverse',
    'flex-direction: column-reverse',
    '-webkit-box-direction: reverse',
    '-webkit-box-orient: vertical'
  ],

  'flex-wrap: nowrap': [
    '-webkit-flex-wrap: nowrap',
    '-ms-flex-wrap: none',
    'flex-wrap: nowrap'
  ],
  'flex-wrap: wrap': [
    '-webkit-flex-wrap: wrap',
    '-ms-flex-wrap: wrap',
    'flex-wrap: wrap'
  ],
  'flex-wrap: wrap-reverse': [
    '-webkit-flex-wrap-reverse: wrap-reverse',
    '-ms-flex-wrap-reverse: wrap-reverse',
    'flex-wrap-reverse: wrap-reverse'
  ],

  'justify-content: flex-start': [
    '-webkit-box-pack: start',
    '-ms-flex-pack: start',
    '-webkit-justify-content: flex-start',
    'justify-content: flex-start'
  ],
  'justify-content: flex-end': [
    '-webkit-box-pack: end',
    '-ms-flex-pack: end',
    '-webkit-justify-content: flex-end',
    'justify-content: flex-end'
  ],
  'justify-content: space-between': [
    '-webkit-box-pack: justify',
    '-ms-flex-pack: justify',
    '-webkit-justify-content: space-between',
    'justify-content: space-between'
  ],
  'justify-content: space-around': [
    '-ms-flex-pack: distribute',
    '-webkit-justify-content: space-around',
    'justify-content: space-around'
  ],
  'justify-content: center': [
    '-webkit-box-pack: center',
    '-ms-flex-pack: center',
    '-webkit-justify-content: center',
    'justify-content: center'
  ],

  'align-items: flex-start': [
    '-webkit-box-align: start',
    '-ms-flex-align: start',
    '-webkit-align-items: flex-start',
    'align-items: flex-start'
  ],
  'align-items: flex-end': [
    '-webkit-box-align: end',
    '-ms-flex-align: end',
    '-webkit-align-items: flex-end',
    'align-items: flex-end'
  ],
  'align-items: center': [
    '-webkit-box-align: center',
    '-ms-flex-align: center',
    '-webkit-align-items: center',
    'align-items: center'
  ],
  'align-items: baseline': [
    '-webkit-box-align: baseline',
    '-ms-flex-align: baseline',
    '-webkit-align-items: baseline',
    'align-items: baseline'
  ],
  'align-items: stretch': [
    '-webkit-box-align: stretch',
    '-ms-flex-align: stretch',
    '-webkit-align-items: stretch',
    'align-items: stretch'
  ]
}
exports.transformByKey = {
  'flex-grow': [
    '-webkit-box-flex: $value',
    '-webkit-flex-grow: $value',
    '-ms-flex-positive: $value',
    'flex-grow: $value'
  ],
  'flex-shrink': [
    '-webkit-flex-shrink: $value',
    '-ms-flex-negative: $value',
    'flex-shrink: $value'
  ],
  'flex-basis': [
    '-webkit-flex-basis: $value',
    '-ms-flex-preferred-size: $value',
    'flex-basis: $value'
  ],
  'order': function transformOrder (value) {
    return [
      // old flexbox spec only supports order starting at 1
      '-webkit-box-ordinal-group: ' + (1 + value),
      '-webkit-order: ' + value,
      '-ms-flex-order: ' + value,
      'order: ' + value
    ]
  },
  'flex': function transformFlex (value) {
    var boxFlexValue = value.split(' ').shift()
    return [
      '-webkit-box-flex: ' + boxFlexValue,
      '-webkit-flex: ' + value,
      '-ms-flex: ' + value,
      'flex: ' + value
    ]
  }
}
