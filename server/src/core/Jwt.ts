import jwt, { type SignOptions, type JwtPayload } from 'jsonwebtoken'
import { JWT_SECRET, JWT_ACCESS_EXPIRES } from '@/config/env'
import { v4 as uuid } from 'uuid'
import { hashSync } from 'bcrypt'
import { prisma } from '@/prisma/client'
import { logger, logError } from '@/config/logger'
import moment from 'moment'

// interface ICSRF {
//     isValid(payload: JwtPayload, options: SignOptions): boolean;
//     get(userSessionId: string): TCsrfItem[];
//     generate(userSessionId: string): TCsrfItem;
//     delete(userSessionId: string, csrfToken: string): void;
//     deleteAllExpired(): void;
//   }

type TGeneratePayload = JwtPayload & {
    readonly userAgent: string
    readonly localeLang: string
    readonly timeZone: string
}

class JWT {
	//
	async generate(payload: TGeneratePayload, options: SignOptions = {}): Promise<string> {
		//
		try {
			//
			const { sub, iss, userAgent, localeLang, timeZone } = payload
			//
			if (!userAgent || !localeLang || !timeZone) {
				throw 'to generate token it requires additional data'
			}
			//
			const fingerprint = hashSync(`${userAgent}-${localeLang}-${timeZone}`, 5)
			//
			//const now = Date.now()
			const nowInSec = moment().unix()
			const jti = uuid()
			const die = nowInSec + 15
            
			// sub: userId !!! - кто получал    
			// iss: 'registration' | 'login' - место выдачи

			// Публичное инфо о токене
			const generatePayload: JwtPayload = {
				iat: nowInSec, // дата и время создания jwt
				nbf: nowInSec, // после какого времени jwt валиден
				exp: nowInSec + 10, // до какого времени jwt валиден
				jti,
				die,
			}
			//
			if (sub) generatePayload.sub = sub
			//
			if (iss) generatePayload.iss = iss
			//
			const generateOptions: SignOptions = {
				...options
			}
			//
			const token = jwt.sign(generatePayload, JWT_SECRET, generateOptions)
			//
			// const data = await prisma.jwt.create({
			//     data: {
			//         jti,
			//         exp: new Date(die)
			//     }
			// })
			// console.log(data);
			//
			return token
			//
		} catch (error: unknown) {
			//
			logError('JWT::generate error:', error)
			//
			throw error
		}
	}

	decode(token: string) {
		try {
			//
			return jwt.decode(token)
			//
		} catch (err) {
			//
			return null
		}
	}

	isValid(token: string) {
		try {
			//
			jwt.verify(token, JWT_SECRET)
			// todo:
			// проверить еще в БД
			//
			return true
			//
		} catch (err) {
			//
			return false
		}
	}

	// refresh(refresh_token) {
	//     // todo:
	//     //  сравниваю fingerPrint
	// }
}

// export const verifyJWT = async <T>(token: string): Promise<T> => {
//   try {
//     const secret = getEnvVariable('JWT_SECRET_KEY')
//     const decoded = jwt.verify(token, secret)
//     return decoded as T
//   } catch (error) {
//     console.log(error)
//     throw new Error('Your token has expired.')
//   }
// }


const Jwt = new JWT()

export {
	Jwt
}
