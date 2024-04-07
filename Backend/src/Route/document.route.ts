import express from 'express';
import { saveDocument, removeDocument, showDocuments } from '../Controllers/documents.controller';

const router = express.Router();

router.post('/', saveDocument);
router.delete('/:id', removeDocument);
router.get('/:userId', showDocuments);

export default router;
