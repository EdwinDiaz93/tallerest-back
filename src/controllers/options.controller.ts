import { Request, Response } from 'express';
import Option from '../models/options.model';

export class OptionsController {
  static async getOptions(req: Request, res: Response) {
    try {
      const page: number = +req.query.page || 1;
      const limit: number = +req.query.limit || 10;

      const offset = (page - 1) * limit;
      const { count, rows } = await Option.findAndCountAll({
        order: [
          ['id', 'DESC'],
        ],
        offset,
        limit,
      });

      const totalPages = Math.ceil(count / limit);

      const data = {
        rows,
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

}

