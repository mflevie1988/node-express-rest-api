import httpStatus from 'http-status';
import { ExtendableError } from './ExtendableError';

export class APIError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   */
  constructor(message: string, status = httpStatus.INTERNAL_SERVER_ERROR) {
    super(message, status);
  }
}
