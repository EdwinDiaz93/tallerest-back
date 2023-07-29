import express from 'express';
import moviesRoutes from './movies.routes';
import optionsRoutes from './options.routes';

const mainRouter = express.Router();

mainRouter.use('/movies', moviesRoutes);
mainRouter.use('/options', optionsRoutes);

export default mainRouter;


