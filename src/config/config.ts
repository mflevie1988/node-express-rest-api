import * as dotenv from 'dotenv';
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 4040;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const ALFRESCO_HOST = process.env.ALFRESCO_HOST || 'localhost';
const ALFRESO_PORT = process.env.ALFRESO_PORT || 8080;

export const SERVER = {
  hostName: SERVER_HOSTNAME,
  port: SERVER_PORT
};

const mysqlConnectionString = {
  host: 'localhost'
};

const alfrescoConfig = {
  host: `http://${ALFRESCO_HOST}`,
  port: ALFRESO_PORT,
  commonApiSuffix1: '/alfresco/service/api/',
  commonSlignShotSuffix: '/alfresco/service/slingshot/'
};

const appConfig = {
  server: SERVER,
  alfrescoServer: alfrescoConfig,
  mysqlServerConnection: mysqlConnectionString
};

export default appConfig;
