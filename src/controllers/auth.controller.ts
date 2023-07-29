import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import { sign } from '../utils/jwt';
import User from '../models/user.model';


export class AuthController {

    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({
                where: { email },
            });

            if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

            const validPassword = bcryptjs.compare(password, user.password);

            if (!validPassword) return res.status(400).json({ msg: 'Invalid credentials' });

            // @ts-ignore
            const userRoles = await user.getRoles();
            const roles = userRoles.length && userRoles.map(rol => ({ id: rol.id, name: rol.name }));

            const token = await sign({ id: user.id, name: user.name, email: user.email, roles });

            return res.status(200).json({
                id: user.id,
                name: user.name,
                email: user.email,
                token
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Internal server error',
            })
        }
    }

    static async register(req: Request, res: Response) {
        try {
            const { email, name, password } = req.body;

            // verify if a user already exist
            const userDb = await User.findOne({
                where: { email },
            });

            if (userDb) return res.status(400).json({ msg: `email ${email} already taken` });

            // create a user
            await User.create({
                name,
                email,
                password: bcryptjs.hashSync(password, bcryptjs.genSaltSync(10)),
            })

            return res.status(200).json({
                ok:true,
                msg:'User registered'
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Internal server error',
            })
        }
    }

}
