import { Request, Response } from 'express';
import { APIError } from '../helpers/errorHandlers/APIError';
// import { parseString } from 'xml2js';
import status from 'http-status';
import config from '../config/config';

export function getAlfrescoAccessTokens(): boolean {
  const error = new APIError('Test Error', status.INTERNAL_SERVER_ERROR);
  if (config.alfrescoServer.host) {
    return true;
  }
  return !error;
}

export function getAlfresco(req: Request, res: Response): Response<any> {
  return res.send('Express + TypeScript Server');
}
