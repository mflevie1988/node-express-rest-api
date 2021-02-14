import express from 'express';
import * as alfrescoController from '../controllers/alfresco.controller';
const router = express.Router();

router.route('/').get(alfrescoController.getAlfresco);

export default router;
