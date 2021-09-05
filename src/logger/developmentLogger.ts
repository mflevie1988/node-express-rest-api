import { createLogger, transports, format } from 'winston';
const { combine, timestamp, printf, json, colorize, errors } = format;

const customLoggerFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] [${level}] ${message}`;
});

export const developmentLogger = () => {
  return createLogger({
    level: 'debug',
    format: combine(
      colorize(),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      json(),
      customLoggerFormat
    ),
    transports: [new transports.Console()]
  });
};
