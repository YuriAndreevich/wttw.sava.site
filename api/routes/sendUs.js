import { Router } from 'express'
import { createSendUs, getAll } from '../controllers/sendUs.js'
import { authorizeRoles } from "../middleware/authorizeRoles.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = new Router()

router.post('/', createSendUs)
router.get('/',
    checkAuth, 
    authorizeRoles(['admin']), 
    getAll
  );

export default router
