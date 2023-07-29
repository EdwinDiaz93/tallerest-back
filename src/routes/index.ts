import express from 'express';
import moviesRoutes from './movies.routes';
import optionsRoutes from './options.routes';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';

const mainRouter = express.Router();

mainRouter.use('/auth', authRoutes);
mainRouter.use('/users', userRoutes);

mainRouter.use('/movies', moviesRoutes);
mainRouter.use('/options', optionsRoutes);

export default mainRouter;


