import express from 'express';
import { MoviesController } from '../controllers';
import { verifyRoles, verifyToken } from '../middlewares';
import { Roles } from '../constants';


const moviesRoutes = express.Router();

moviesRoutes.post('/', [verifyToken, verifyRoles(Roles.ADMIN)], MoviesController.createMovie);
moviesRoutes.get('/', [verifyToken, verifyRoles(Roles.ADMIN)], MoviesController.getMovies);

export default moviesRoutes;