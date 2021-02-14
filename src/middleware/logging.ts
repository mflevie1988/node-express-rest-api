import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import logging from '../logs/logging';

const router = express.Router();
const namespace = 'SERVER';

router.use((req: Request, res: Response, next: NextFunction) => {
  logging.info(namespace, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

  res.on('finish', () => {
    logging.info(namespace, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
  });
  next();
});

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

export default router;
