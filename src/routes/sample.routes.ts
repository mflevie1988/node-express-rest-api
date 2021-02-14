import express from 'express';
import * as sampleController from '../controllers/sample';
const router = express.Router();

router.route('/').get(sampleController.sampleHealthCheck);

export default router;
