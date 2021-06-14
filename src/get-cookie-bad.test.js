import { getCookie } from './get-cookie-bad'

// jest.config.js
// testEnvironment: "node",

describe('getCookie - Bad', () => {
  it('can correctly parse a cookie value for an existing cookie', () => {
    document.cookie = 'key2=value2'
    expect(getCookie('key2')).toEqual('value2')
  })

  it('can correctly parse a cookie value for a nonexistent cookie', () => {
    expect(getCookie('key2')).toEqual('')
  })
})



// describe('getCookie - Bad', () => {
//   it('can correctly parse a cookie value for an existing cookie', () => {
//     document.cookie = 'key2=value2'
//     expect(getCookie('key2')).toEqual('value2')
//     document.cookie = 'key2=; expires = Thu, 01 Jan 1970 00:00:00 GMT'
// })

//   it('can correctly parse a cookie value for a nonexistent cookie', () => {
//     expect(getCookie('key2')).toEqual('')
//   })
// })



// What if we wanted to parse a cookie string that's
// not the current document.cookie value?
