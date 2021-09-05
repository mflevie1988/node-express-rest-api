import express, { Request, Response, NextFunction } from 'express';
import { json, urlencoded } from 'body-parser';
import logger from '../logger';

const router = express.Router();
const namespace = 'SERVER';

router.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`Request - [${req.method}], ${req.url}`);

  res.on('finish', () => {
    logger.info(
      `RESPONSE - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
    );
  });
  next();
});

router.use(urlencoded({ extended: false }));
router.use(json());

export default router;
