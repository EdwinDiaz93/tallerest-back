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
        paranoid: false,
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
      const { name, budget, date, duration } = req.body;

      const movie = await Movie.create({ name, budget, date, duration });

      return res.status(201).json({
        ok: true,
        msg: 'created'
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la película' });
    }
  };

  static async updateMovie(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const movieDb = await Movie.findByPk(id);
      if (!movieDb) return res.
        status(400).
        json({
          ok: false,
          msg: `Movie with id ${id} not found`,
        });

      const { name, budget, date, duration } = req.body;

      await movieDb.update({ name, budget, date, duration });

      return res.status(200).json({
        ok: true,
        msg: 'updated'
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la película' });
    }
  };

  static async deleteMovie(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const movieDb = await Movie.findByPk(id);
      if (!movieDb) return res.
        status(400).
        json({
          ok: false,
          msg: `Movie with id ${id} not found`,
        });


      await movieDb.destroy();

      return res.status(200).json({
        ok: true,
        msg: 'deleted'
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la película' });
    }
  };

}

