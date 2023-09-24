import type { NextFunction, Request, Response } from 'express'
import { z, ZodError } from 'zod'
import { wrongData, somethingWentWrong } from '@/helpers/http'

type TFinger = {
    userAgent: string
    localeLang: string
    timeZone: string
}

const MFingerprintHeadersSchema = z.object({
  'user-agent': z.string().min(1),
  'accept-language': z.string().min(1),
  'x-timezone': z.string().min(1),
}).transform((data): TFinger => {
  return {
    userAgent: data['user-agent'],
    localeLang: data['accept-language'],
    timeZone: data['x-timezone'],
  }
})

function MFingerprint(req: Request, res: Response, next: NextFunction) {
  //
  try {
    //
    MFingerprintHeadersSchema.parse(req.headers)
    //
    next()
    //
  } catch (error: unknown) {
    //
    if (error instanceof ZodError) {
      return wrongData(res, error.issues)
    }
    //
    return somethingWentWrong(res)
  }
}

export { MFingerprint, MFingerprintHeadersSchema }

