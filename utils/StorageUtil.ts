import { Base64 } from 'js-base64'

export default class StorageUtil {
  static createCookie (name: string, value: string, days: number) {
    let expires = ''
    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + value + expires + '; path=/'
  }

  static readCookie (name: string) {
    const nameEQ = name + '='
    const ca = document.cookie.split(';')
    for (let c of ca) {
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length)
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length)
      }
    }
    return ''
  }

  static eraseCookie (name: string) {
    StorageUtil.createCookie(name, '', -1)
  }

  static setItem (key: string, data: string) {
    const storageKey = '__local_' + key
    if (!data) {
      return
    }
    if (localStorage) {
      try {
        localStorage.setItem(storageKey, Base64.encode(data))
      } catch (e) {
        console.warn(`failed to setItem to localStorage, key=${storageKey}`, e)
      }
    } else {
      StorageUtil.createCookie(storageKey, Base64.encode(data), 7)
    }
  }

  static getItem (key: string) {
    const storageKey = '__local_' + key
    if (localStorage) {
      try {
        const data = localStorage.getItem(storageKey)
        return data ? Base64.decode(data) : ''
      } catch (e) {
        console.warn(`failed to getItem from localStorage, key=${storageKey}`, e)
        return ''
      }
    } else {
      return Base64.decode(StorageUtil.readCookie(storageKey))
    }
  }

  static exist (key: string) {
    return !!StorageUtil.getItem(key)
  }

  static removeItem (key: string) {
    const storageKey = '__local_' + key
    if (localStorage) {
      try {
        localStorage.removeItem(storageKey)
      } catch (e) {
        console.warn(`failed to removeItem from localStorage, key=${storageKey}`, e)
      }
    } else {
      StorageUtil.eraseCookie(storageKey)
    }
  }
}
