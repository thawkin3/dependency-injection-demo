import { getCookie } from './get-cookie-bad'

describe('getCookie - Bad', () => {
  it('can correctly parse a cookie value for an existing cookie', () => {
    document.cookie = 'key2=value2'
    expect(getCookie('key2')).toEqual('value2')
    document.cookie = 'key2=; expires = Thu, 01 Jan 1970 00:00:00 GMT'
  })

  it('can correctly parse a cookie value for an nonexistent cookie', () => {
    expect(getCookie('bad_key')).toEqual('')
  })
})
