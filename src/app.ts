import express from 'express';
import cors from 'cors';
import { config } from "./config";
import mainRouter from './routes';
import DB from './models';
import mainSeeder from './seeders';


const app = express();

const corsOpts = {
  origin: '*',
  methods: [
    'GET',
    'POST',
    'PUT',
    'DELETE',
  ],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
  ],
};

app.use(cors(corsOpts));

app.use(express.json());

app.use('/api/v1', mainRouter);


app.listen(config.port, async () => {
  await DB.sync({ force: true });
  await mainSeeder();
  console.log(`API iniciada en http://localhost:${config.port}`);
});