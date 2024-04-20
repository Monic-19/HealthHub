import express from 'express';
import { uploadDocument, saveDocumentInfo, getDocumentHistoryForUser, deleteDocumentById } from '../Controllers/document.controller';

const router = express.Router();
router.post('/upload', uploadDocument, saveDocumentInfo);
router.get('/:userId', getDocumentHistoryForUser);
router.delete('/:documentId', deleteDocumentById);

export default router;
