let EXPRESS_PORT = 4000
if (Number(process.env.EXPRESS_PORT) > 0 && Number(process.env.EXPRESS_PORT) < 65536) {
  EXPRESS_PORT = Number(process.env.EXPRESS_PORT)
}
let LNURL_PORT = 4001
if (Number(process.env.LNURL_PORT) > 0 && Number(process.env.LNURL_PORT) < 65536) {
  LNURL_PORT = Number(process.env.LNURL_PORT)
}
let PROXY_PORT = 4002
if (Number(process.env.PROXY_PORT) > 0 && Number(process.env.PROXY_PORT) < 65536) {
  PROXY_PORT = Number(process.env.PROXY_PORT)
}
let WEB_PORT = 5173
if (Number(process.env.WEB_PORT) > 0 && Number(process.env.WEB_PORT) < 65536) {
  WEB_PORT = Number(process.env.WEB_PORT)
}
let NGROK_AUTH_TOKEN: string | undefined = undefined
if (typeof process.env.NGROK_AUTH_TOKEN === 'string' && process.env.NGROK_AUTH_TOKEN.length > 0) {
  NGROK_AUTH_TOKEN = process.env.NGROK_AUTH_TOKEN
}

let REDIS_BASE_PATH = 'tipcards:develop'
if (typeof process.env.REDIS_BASE_PATH === 'string' && process.env.REDIS_BASE_PATH.length > 0) {
  REDIS_BASE_PATH = process.env.REDIS_BASE_PATH
}

let REDIS_URL = '127.0.0.1:6379'
if (typeof process.env.REDIS_URL === 'string' && process.env.REDIS_URL.length > 0) {
  REDIS_URL = process.env.REDIS_URL
}

let LNBITS_ORIGIN = 'https://legend.lnbits.com'
if (typeof process.env.LNBITS_ORIGIN === 'string' && process.env.LNBITS_ORIGIN.length > 0) {
  LNBITS_ORIGIN = process.env.LNBITS_ORIGIN
}

export {
  EXPRESS_PORT,
  LNURL_PORT,
  PROXY_PORT,
  WEB_PORT,
  NGROK_AUTH_TOKEN,
  REDIS_BASE_PATH,
  REDIS_URL,
  LNBITS_ORIGIN
}

export const TIPCARDS_ORIGIN = process.env.TIPCARDS_ORIGIN || ''
export const TIPCARDS_API_ORIGIN = process.env.TIPCARDS_API_ORIGIN || ''
export const LNBITS_INVOICE_READ_KEY = process.env.LNBITS_INVOICE_READ_KEY || ''
export const LNBITS_ADMIN_KEY = process.env.LNBITS_ADMIN_KEY || ''
export const STATISTICS_TOKENS = process.env.STATISTICS_TOKENS?.split(';') || []
export const STATISTICS_PREPEND_FILE = process.env.STATISTICS_PREPEND_FILE || undefined
export const STATISTICS_EXCLUDE_FILE = process.env.STATISTICS_EXCLUDE_FILE || undefined
