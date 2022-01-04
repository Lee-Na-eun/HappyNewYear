import * as express from 'express';
import 'dotenv/config';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as cookieParser from 'cookie-parser';
import { Sequelize } from 'sequelize';

const app: express.Application = express();
const serverPort = process.env.SERVER_PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(cookieParser());
app.use(morgan('dev'));

app.use(
  cors({
    origin: [process.env.CLIENT_URL, 'http://localhost:3000'],
    credentials: true,
  })
);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello Server!');
});

app.use((req: express.Request, res: express.Response, next) => {
  res.status(404).send('Not Found!');
});

app.use(
  (
    err,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).send({
      message: 'Internal Server Error',
      stacktrace: err.toString(),
    });
  }
);

app.listen(serverPort, () => {
  console.log(`서버 연결 성공 🍎`);
});
