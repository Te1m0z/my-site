import type { Request, Response } from 'express';
import { ZodError } from 'zod'
//
import { userLogin } from './user.services'
import { userLoginSchema } from './user.validation'
//
import { wrongData, wrongLoginOrPassword } from '@/helpers/http'
import { MFingerprintHeadersSchema } from '@/middlewares/fingerprint'

abstract class UserController {
    //
    static async login(req: Request, res: Response) {
        //
        try {
            //
            const { login, password } = userLoginSchema.parse(req.body)
            const headers = MFingerprintHeadersSchema.parse(req.headers);
            //
            const userDataWithTokens = await userLogin({
                login,
                password,
                ...headers,
            })
            //
            return res.status(200).json(userDataWithTokens)
            //
        } catch (error: unknown) {
            //
            if (error instanceof ZodError) {
                return wrongData(res, error.issues)
            }
            //
            return wrongLoginOrPassword(res)
        }
    }
}

export {
    UserController
}
