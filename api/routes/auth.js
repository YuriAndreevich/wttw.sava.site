import { Router } from 'express'
import { register, login, getMe } from '../controllers/auth.js'
import { checkAuth } from '../middleware/checkAuth.js'
const router = new Router()


router.post('/register', register)


router.post('/login', login)

router.get('/getMe', checkAuth, getMe)

export default router
