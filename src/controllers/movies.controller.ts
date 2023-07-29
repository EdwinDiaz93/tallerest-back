import { Request, Response } from 'express';
import Movie from '../models/movies.model';

export class MoviesController {

  static async getMovies(req: Request, res: Response) {
    try {

      const page: number = +req.query.page || 1;
      const limit: number = +req.query.page || 10;

      const offset = (page - 1) * limit;
      const { count, rows } = await Movie.findAndCountAll({
        order: [
          ['id', 'DESC'],
        ],
        offset,
        limit,
      });

      const totalPages = Math.ceil(count / limit);

      const data = {
        movies: rows,
        totalRows: count,
        currentPage: page,
        firstPage: 1,
        lastPage: totalPages,
        totalPages: totalPages,
      }

      return res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la película' });
    }
  };

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

}

