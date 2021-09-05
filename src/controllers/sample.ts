import { Request, Response } from 'express';

export const sampleHealthCheck = (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'Healthy'
  });
};
