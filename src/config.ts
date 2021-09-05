const config = {
  nodeEnvironment: process.env.NODE_ENV as string,
  serverPort: process.env.LISTEN_PORT as string,
  serverHost: process.env.LISTEN_HOST as string,
  alfrescoHost: process.env.ALFRESCO_HOST as string,
  alfrescoPort: process.env.ALFRESO_PORT as string,
  alfrescoPassword: process.env.ALFRESO_PASSWORD as string,
  mysqlDbHost: process.env.MYSQL_DB_HOST as string,
  mysqlDbUserName: process.env.MYSQL_DB_USERNAME as string,
  mysqlDbPassword: process.env.MYSQL_DB_PASSWORD as string,
  clientDbHost: process.env.CLIENT_DB_HOST as string,
  clientDbUserName: process.env.CLIENT_DB_USERNAME as string,
  clientDbPassword: process.env.CLIENT_DB_PASSWORD as string,
  cupsHost: process.env.CUPS_HOST as string,
  cupsUserName: process.env.CUPS_USERNAME as string,
  cupsPassword: process.env.CUPS_PASSWORD as string,
  gitCommitId: process.env.LAST_COMMIT_SHA as string
};

export function getConfig() {
  return config;
}
export function isDevelopment() {
  return config.nodeEnvironment === 'development';
}

export function isRunningTests() {
  return config.nodeEnvironment === 'test';
}

export default config;
