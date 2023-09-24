import { Router } from 'express'
import { MCsrf } from '@/middlewares/csrf'
import { PostController } from './post.controller'
import { Jwt } from '@/core/Jwt'

const router = Router()

const ROUTE_PREFIX = 'post'

router.get(`/${ROUTE_PREFIX}/`, PostController.all)

router.get(`/${ROUTE_PREFIX}/:id`, PostController.getById)

router.post(`/${ROUTE_PREFIX}/`, MCsrf, PostController.create)

router.post(`/${ROUTE_PREFIX}/jwt`, async (req, res) => {
  res.send(await Jwt.generate({
    localeLang: 'ru',
    timeZone: 's',
    userAgent: '',
  }, {}))
})

router.post(`/${ROUTE_PREFIX}/jwt-valid`, (req, res) => {
  res.json({
    is: Jwt.isValid(req.body.token),
  })
})

export { router as postRouter }

