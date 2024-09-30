import {Router} from 'express';
import authMiddleware from '../app/middleware/auth.middleware.js';
import authorizationMiddleware from '../app/middleware/authorization.middleware.js';
const router = Router();

router.get('/', authMiddleware, authorizationMiddleware);

export const vehiclesRouter = router;