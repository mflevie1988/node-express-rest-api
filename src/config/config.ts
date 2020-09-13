import * as dotenv from 'dotenv';
dotenv.config();

export const mysqlConnectionString = {
  host: 'localhost',
};

export const alfrescoConfig = {
  host: `http://${process.env.ALFRESCO_HOST}`,
  port: process.env.ALFRESO_PORT,
  commonApiSuffix1: '/alfresco/service/api/',
  commonSlignShotSuffix: '/alfresco/service/slingshot/',
};
