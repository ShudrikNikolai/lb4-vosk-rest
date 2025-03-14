import dotenv from 'dotenv';
import {databaseConfig} from './database.config';
const DEV_ENV = dotenv.config({ path: '../config/local/.env.api.local' });
const PROD_ENV = dotenv.config({ path: '../config/prod/.env.api.local' });

const IS_DEV = process.env.NODE_ENV === 'development'

// @ts-ignore
const ENV: any = process.env.IS_DEV ? DEV_ENV.parsed : PROD_ENV.parsed;

const DATABASE = databaseConfig(ENV)

export default {
  IS_DEV,
  DATABASE,
  ENV
}
