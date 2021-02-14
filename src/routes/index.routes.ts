import express from 'express';
import alfrescoRoutes from './alfresco.routes';
import sampleRoutes from './sample.routes';

const router = express.Router();

router.use('/alfresco', alfrescoRoutes);

router.use('/health', sampleRoutes);

export default router;
