import fs from 'fs'
import { generateKeyPair, importPKCS8, type KeyLike, SignJWT, exportPKCS8 } from 'jose'

import type { User } from '../../../src/data/User'

const FILENAME = 'lnurl.auth.pem'
const alg = 'RS256'

let privateKey: KeyLike

const loadPrivateKey = async () => {
  try {
    if (fs.existsSync(FILENAME)) {
      const data = fs.readFileSync(FILENAME, 'utf8')
      privateKey = await importPKCS8(data, alg)
    } else {
      const keys = await generateKeyPair(alg)
      privateKey = keys.privateKey
      const pkcs8Pem = await exportPKCS8(privateKey)
      fs.writeFileSync(FILENAME, pkcs8Pem)
    }
  } catch (error) {
    console.error
  }
}
loadPrivateKey()

const createJWT = async ({ id, lnurlAuthKey }: User) => {
  return new SignJWT({ id, lnurlAuthKey })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer('tipcards:auth')
    .setAudience('tipcards')
    .setExpirationTime('24h')
    .sign(privateKey)
}

export {
  createJWT,
  loadPrivateKey,
}
