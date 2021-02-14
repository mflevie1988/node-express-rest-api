import { Request, Response } from 'express';
import logging from '../logs/logging';

const namespace = 'HealthCheck Controller';

export const sampleHealthCheck = (req: Request, res: Response) => {
  logging.info(namespace, 'Sample health check controller');

  return res.status(200).json({
    message: 'Healthy'
  });
};
