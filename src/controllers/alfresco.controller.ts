import express, { Request, Response } from 'express';
import { APIError } from '../helpers/errorHandlers/APIError';
// import { parseString } from 'xml2js';
import status from 'http-status';
import { alfrescoConfig } from '../config/config';

export function getAlfrescoAccessTokens(): boolean {
  const error = new APIError('Test Error', status.INTERNAL_SERVER_ERROR);
  if (alfrescoConfig.host) {
    return true;
  }
  return !error;
}

export function get(req: Request, res: Response): express.Response<any> {
  return res.send('Express + TypeScript Server');
}
