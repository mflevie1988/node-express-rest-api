import { createLogger, transports, format } from 'winston';
const { combine, timestamp, label, printf, json, colorize, errors } = format;

const customLoggerFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] [${level}] ${message}`;
});

export const productionLogger = () => {
  return createLogger({
    level: 'info',
    format: combine(json(), timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), errors({ stack: true }), customLoggerFormat),
    transports: [new transports.Console()]
  });
};
