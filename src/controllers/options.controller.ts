import { Request, Response } from 'express';

export class OptionsController {
  static async getOptions(req: Request, res: Response) {
    try {
      return res.status(200).json({
        ok: true,
        msg: 'all',
      })
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la película' });
    }
  };

}

