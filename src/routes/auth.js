import { Router } from 'express'
import { body } from 'express-validator'

import { signin } from '../handlers/auth.js'
import { validate } from '../middlewares/validation.js'

const router = Router()

router.post(
  '/signin',
  [
    body('username').equals(process.env.ADMIN_USER),
    body('password').equals(process.env.ADMIN_PASS),
    validate,
  ],
  signin
)

export default router
