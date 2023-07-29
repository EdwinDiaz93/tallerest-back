import { Request, Response } from 'express';
import Movie from '../models/movies.model';

export class MoviesController {
  static async createMovie(req: Request, res: Response) {
    try {
      return res.status(200).json({
        ok: true,
        msg: 'created'
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la película' });
    }
  };

  static async getMovies(req: Request, res: Response) {
    try {
      const movies = await Movie.findAll();
      return res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la película' });
    }
  };

}

