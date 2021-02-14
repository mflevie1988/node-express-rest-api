import chalk from 'chalk';

const getTimeStamp = (): string => new Date().toISOString();

const info = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.log(`[${chalk.bgMagentaBright(getTimeStamp())}] : [INFO] ${chalk.green(namespace)} ${chalk.yellow(message)}`, object);
  }

  console.log(`[${chalk.blue(getTimeStamp())}] : ${chalk.yellow('[INFO]')} ${chalk.green(namespace)} ${chalk.yellow(message)}`);
};

const warn = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.log(`[${chalk.blue(getTimeStamp())}] : ${chalk.yellow('[WARN]')} ${chalk.green(namespace)} ${chalk.yellow(message)}`, object);
  }

  console.log(`[${chalk.blue(getTimeStamp())}] : ${chalk.yellow('[WARN]')} ${chalk.green(namespace)} ${chalk.yellow(message)}`);
};

const error = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.log(`[${chalk.blue(getTimeStamp())}] : ${chalk.red('[ERROR]')} ${chalk.green(namespace)} ${chalk.red(message)}`, object);
  }

  console.log(`[${chalk.blue(getTimeStamp())}] : ${chalk.red('[ERROR]')} ${chalk.green(namespace)} ${chalk.red(message)}`);
};

const debug = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
  }

  console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
};

export default {
  info,
  warn,
  error,
  debug
};
