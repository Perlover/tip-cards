import { randomUUID } from 'crypto'

export const createUserId = () => randomUUID().replace(/-/g, '') // redis search cannot process hyphens (-) in indices

export type User = {
  id: string // uuid but without hyphens (see above)
  lnurlAuthKey: string // lnurl auth key
  created: number // unix timestamp
  availableCardsLogos?: string[] | null // list of image ids
  availableLandingPages?: string[] | null // list of landing page ids
}
