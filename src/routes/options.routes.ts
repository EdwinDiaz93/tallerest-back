import express from 'express';
import { OptionsController } from '../controllers';


const optionsRoutes = express.Router();

optionsRoutes.get('/', OptionsController.getOptions);

export default optionsRoutes;