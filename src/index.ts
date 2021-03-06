import 'reflect-metadata';
import { ApiServer } from './server';
import { DatabaseProvider } from './database';

DatabaseProvider.configure({
  type: (process.env.DATABASE_TYPE as any) || 'postgres',
  database: process.env.DATABASE_NAME || 'test',
  username: process.env.DATABASE_USERNAME || 'test',
  password: process.env.DATABASE_PASSWORD || 'test',
  host: process.env.DATABASE_HOST || 'localhost',
  port: +process.env.DATABASE_PORT || 5432,
  ssl: !!process.env.USE_SSL,
});

const server = new ApiServer();
server.start(+process.env.PORT || 8080);
