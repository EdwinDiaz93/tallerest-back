import express from 'express';
import { OptionsController } from '../controllers';
import {  verifyToken } from '../middlewares';


const optionsRoutes = express.Router();

optionsRoutes.get('/', verifyToken, OptionsController.getOptions);

export default optionsRoutes;