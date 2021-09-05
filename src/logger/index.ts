import winston from 'winston';
import { developmentLogger } from './developmentLogger';
import { productionLogger } from './productionLogger';

let logger: winston.Logger = null;

if (process.env.NODE_ENV === 'development') {
  logger = developmentLogger();
} else {
  logger = productionLogger();
}

export default logger;
