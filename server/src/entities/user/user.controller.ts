import type { Request, Response } from 'express'
import { ZodError } from 'zod'
//
import { userLogin } from './user.services'
import { userLoginSchema } from './user.validation'
//
import { wrongData, wrongLoginOrPassword } from '@/helpers/http'

abstract class UserController {
  //
  static async login(req: Request, res: Response) {
    //
    try {
      //
      const { fingerprint } = req
      //
      if (!fingerprint) throw 'login cannot be continued'
      //
      const { login, password } = userLoginSchema.parse(req.body)
      //
      const userDataWithTokens = await userLogin({
        login,
        password,
        fingerprint,
      })
      //
      return res.status(200).json({
        status: true,
        data: userDataWithTokens,
      })
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
  UserController,
}
