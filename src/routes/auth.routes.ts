import express from 'express';
import { validatorSchema, verifyToken } from '../middlewares';
import { LoginSchema, RegisterSchema } from '../validators';
import { AuthController } from '../controllers';


const authRoutes = express.Router();

authRoutes.post('/login', [validatorSchema(LoginSchema)], AuthController.login);
authRoutes.post('/register', [validatorSchema(RegisterSchema)], AuthController.register);
authRoutes.get('/refresh-token', [verifyToken], AuthController.refreshToken);

export default authRoutes;