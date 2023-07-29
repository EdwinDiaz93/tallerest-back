import express from 'express';
import { MoviesController } from '../controllers';


const moviesRoutes = express.Router();

moviesRoutes.get('/', MoviesController.createMovie);

export default moviesRoutes;