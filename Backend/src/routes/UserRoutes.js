import express from 'express';
import { authentication } from '~/middlewares/verify';
import { UserController } from '~/controllers/UserController';

const router = express.Router();
router.get('/', authentication, UserController.getinfo);
export const UserRoutes = router