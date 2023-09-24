import type { NextApiRequest as Req, NextApiResponse as Res } from 'next'

export type TMethod = 'GET' | 'POST' | 'DELETE' | 'UPDATE'

export function validateMethod(req: Req, res: Res, methods: TMethod[]): boolean {
  //
  if (!methods.includes(<TMethod>req.method)) {
    res.status(405).end()
    return false
  }

  return true
}
