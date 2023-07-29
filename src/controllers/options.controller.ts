import { Request, Response } from 'express';
import Option from '../models/options.model';

export class OptionsController {
  static async getOptions(req: Request, res: Response) {
    try {
      const options = await Option.findAll();
      return res.status(200).json({
        data: options,
        ok: true,
        msg: 'all',
      })
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la película' });
    }
  };

}

