import type { Request, Response } from 'express'
import { somethingWentWrong } from '@/helpers/http'
import { logger } from '@/config/logger'

const MFatal = (err: Error, _: Request, res: Response) => {
	//
	logger.error('MFatal ::: ' + err.message)
	//
	return somethingWentWrong(res)
}

export {
	MFatal
}
