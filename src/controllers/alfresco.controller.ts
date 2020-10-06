// import * as Express from 'express';
import { APIError } from '../helpers/errorHandlers/APIError';
// import { parseString } from 'xml2js';
import { alfrescoConfig } from '../config/config';

export function getAlfrescoAccessTokens(): boolean {
  const error = new APIError('Test Error', 500);
  if (alfrescoConfig.host) {
    return true;
  }
  return !error;
}
