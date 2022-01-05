import * as express from 'express';
import 'dotenv/config';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as cookieParser from 'cookie-parser';
import { sequelize } from './models';

const app: express.Application = express();
const serverPort: number =
  parseInt(process.env.SERVER_PORT as string, 10) || 4000;
const host: string = process.env.HOST || 'localhost';

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

sequelize
  .sync({ force: false })
  .then(() => {
    console.log();
    console.log(`👍데이터베이스 연결 성공👍 \n`);
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(serverPort, host, async () => {
  console.log(`🍎 Server Listening on ${host}:${serverPort} 🍎`);
});

// app.listen(serverPort, () => {
//   console.log(`서버 연결 성공 🍎`);
// });
