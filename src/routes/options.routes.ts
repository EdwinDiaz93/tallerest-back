import express from 'express';
import { Roles } from '../constants';
import { OptionsController } from '../controllers';
import { verifyRoles, verifyToken } from '../middlewares';


const optionsRoutes = express.Router();

optionsRoutes.get('/', [verifyToken, verifyRoles(Roles.ADMIN)], OptionsController.getOptions);

export default optionsRoutes;