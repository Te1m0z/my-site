import { sign, verify } from 'jsonwebtoken'
import { getEnv } from './env'
import type { JwtPayload, Secret } from 'jsonwebtoken'

export type TJwtPayload = { sub: string };

export type TJwtOptions = { exp: string };

export type TJwtToken = string | JwtPayload;

function createJWT(payload: TJwtPayload, options: TJwtOptions): TJwtToken {
  const secret = getEnv('JWT_SECRET_KEY') as Secret
  const expiresIn = options.exp
  const algorithm = 'HS512'
  const token = sign(payload, secret, { expiresIn, algorithm }) as TJwtToken
  return token 
}

/**
 * 
 * @param {string} token Validation attempt token
 * @returns {TJwtToken} - Verificated data
 */
function verifyJWT(token: string): TJwtToken {
  try {
    const secret = getEnv('JWT_SECRET_KEY') as Secret
    const decoded = verify(token, secret) as TJwtToken
    return decoded
  } catch (error) {
    throw new Error('Your token has expired.')
  }
}

export {
  createJWT,
  verifyJWT,
}

