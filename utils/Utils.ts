import dayjs from 'dayjs'
import _ from 'underscore'

const testUa = (reg: string) => new RegExp(reg.toLowerCase()).test(navigator.userAgent.toLowerCase())

export const getUserAgent = () => navigator.userAgent

export const isIOS = () => testUa('iP(hone|od|ad)')

export const isIPhone = () => testUa('iP(hone|od)')

export const isIPad = () => testUa('iPad')

export const isAndroid = () => testUa('Android')

export const isCheckMath = () => testUa('CheckMath')

export const isYuanTiKuEmbed = () => testUa('YuanTiKuEmbed')

export const isYuanKouSuan = () => testUa('YuanSouTiKouSuan')

export const isYuanTiKu = () => testUa('YuanTiKu') && !isYuanTiKuEmbed()

export const isYuanFuDao = () => testUa('YuanFuDao') || isYuanTiKuEmbed()

export const isYuanSouTi = () => testUa('YuanSouTi') && !isYuanKouSuan()

export const isApp = () => isYuanTiKu() || isYuanFuDao() || isYuanKouSuan() || isYuanSouTi()

export const getAppId = () => {
  if (isYuanTiKu()) {
    return 101
  } else if (isYuanSouTi()) {
    return 201
  } else if (isYuanKouSuan()) {
    return 601
  } else if (isYuanFuDao()) {
    return 301
  }
  return 0
}

export const isWechat = () => testUa('micromessenger')

export const isQQ = () => testUa('QQ')

export const isWeibo = () => testUa('weibo')

export const getAppVersion = () => {
  const UA_REGEX = /\s+(YuanTiKu|YuanFuDao|YuanSouTi|YuanSouTiKouSuan)\/(\d+\.\d+\.\d+)(\s+|$)/i
  const matches = navigator.userAgent.match(UA_REGEX)
  return matches ? matches[2] : ''
}

export const verifyPhone = (phone: string | number) => /^1[3-9]\d{9}$/.test(String(phone))

export const verifyVerificationCode = (code: string | number) => String(code).length === 6

export const isOnline = () => navigator.onLine

export const getQuery = () => {
  const query = window.location.search.substr(1)
  const result: any = {}
  query.split('&').forEach((part) => {
    const item = part.split('=')
    result[item[0]] = decodeURIComponent(item[1])
  })
  return result
}

export const params2query = (params: any) => {
  const paramsList: string[] = []
  Object.keys(params).forEach(key => {
    if (key && params[key]) {
      paramsList.push(`${key}=${params[key]}`)
    }
  })
  if (paramsList.length) {
    return `?${paramsList.join('&')}`
  } else {
    return ''
  }
}

/**
 * 比较版本号
 * @returns 0：表示版本相同；1: 表示v1版本大于v2；-1：表示v1版本小于v2
 */
export const compareVersions = (v1: string, v2: string) => {
  if (v1 === v2) {
    return 0
  }

  const v1parts = v1.split('.')
  const v2parts = v2.split('.')
  const len = Math.min(v1parts.length, v2parts.length)

  for (let i = 0; i < len; i++) {
    if (parseInt(v1parts[i]) > parseInt(v2parts[i])) {
      return 1
    }

    if (parseInt(v1parts[i]) < parseInt(v2parts[i])) {
      return -1
    }
  }

  if (v1parts.length > v2parts.length) {
    return 1
  }
  if (v1parts.length < v2parts.length) {
    return -1
  }

  return 0
}

/**
 * 当前版本是否大于等于指定版本
 */
export const greaterThanOrEqualTo = (version: string) => {
  return compareVersions(getAppVersion(), version) >= 0
}

/**
 * 当前版本是否大于指定版本
 */
export const greaterThan = (version: string) => {
  return compareVersions(getAppVersion(), version) > 0
}

export const formatDate = (time: any, format: string) => {
  const _format = format || 'YYYY-MM-DD'
  return (time ? dayjs(time) : dayjs()).format(_format)
}

export const queryConfig = () => {
  return {
    _productId: 631,
    _appId: getAppId()
  }
}

export const extendQuery = (query: any) => {
  return _.extend(query || {}, queryConfig())
}
