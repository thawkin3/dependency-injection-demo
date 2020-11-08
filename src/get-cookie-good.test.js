import { getCookie } from './get-cookie-good'

describe('getCookie - Good', () => {
  it('can correctly parse a cookie value for an existing cookie', () => {
    const cookieString = 'key1=value1;key2=value2;key3=value3'
    const cookieName = 'key2'
    expect(getCookie(cookieString, cookieName)).toEqual('value2')
  })

  it('can correctly parse a cookie value for an nonexistent cookie', () => {
    const cookieString = 'key1=value1;key2=value2;key3=value3'
    const cookieName = 'bad_key'
    expect(getCookie(cookieString, cookieName)).toEqual('')
  })
})
