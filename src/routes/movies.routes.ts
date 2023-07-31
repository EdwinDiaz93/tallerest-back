import express from 'express';
import { verifyRoles, verifyToken, validatorSchema } from '../middlewares';
import { MovieSchema } from '../validators';
import { MoviesController } from '../controllers';
import { Roles } from '../constants';


const moviesRoutes = express.Router();

moviesRoutes.get('/', [verifyToken, verifyRoles([Roles.ADMIN,Roles.USER])], MoviesController.getMovies);
moviesRoutes.get('/:id', [verifyToken, verifyRoles([Roles.ADMIN])], MoviesController.getMovie);
moviesRoutes.post('/', [verifyToken, verifyRoles([Roles.ADMIN]), validatorSchema(MovieSchema)], MoviesController.createMovie);
moviesRoutes.put('/:id', [verifyToken, verifyRoles([Roles.ADMIN]), validatorSchema(MovieSchema)], MoviesController.updateMovie);
moviesRoutes.delete('/:id', [verifyToken, verifyRoles([Roles.ADMIN])], MoviesController.deleteMovie);

export default moviesRoutes;