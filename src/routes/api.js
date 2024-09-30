import {Router} from  "express";
import {createUserAccount, authenticateUser, getAuthenticatedUser} from "../app/controllers/auth.controller.js";
const router = Router();
import authMiddleware from "../app/middleware/auth.middleware.js";

router.post("/register", createUserAccount);
router.post("/login", authenticateUser)
router.get('/user', authMiddleware, getAuthenticatedUser);

export const authRouter = router;

