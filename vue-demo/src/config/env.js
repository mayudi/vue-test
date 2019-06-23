let baseUrl = ''
let baseImgPath

if (process.env.NODE_ENV === 'development') {
  baseUrl = '//elm.cangdu.org'
  baseImgPath = '/img/'
} else {
  baseUrl = '//elm.cangdu.org'
  baseImgPath = '//elm.cangdu.org'
}

export {
  baseUrl,
  baseImgPath
}
