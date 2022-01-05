import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  development: {
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'TripleTwo',
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT,
    dialect: 'mysql',
  },
};

export default config;
