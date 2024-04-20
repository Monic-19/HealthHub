import Document from "../Models/Document";
import User from "../Models/User";
import { Request, Response } from 'express';
import { upload } from "../utils/uploadingFile";


export const uploadDocument = upload.single('file'); 

export const saveDocumentInfo = async (req: Request, res: Response) => {
  try {
    const { userId, description } = req.body;
    
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const document = await Document.create({
      userId: userId,
      documentUrl: req.file.path,
      description: description || ''
    });

    res.status(201).json({ message: 'Document uploaded successfully', document: document });
  } catch (error) {
    console.error('Error uploading document:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getDocumentHistoryForUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const documents = await Document.findAll({ where: { userId: userId } });
    res.json({ documents: documents });
  } catch (error) {
    console.error('Error fetching document history:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteDocumentById = async (req: Request, res: Response) => {
    try {
      const documentId = req.params.documentId;  
      if (!documentId) {
        return res.status(400).json({ error: 'Document ID is required' });
      }  
      const document = await Document.findByPk(documentId);  
      if (!document) {
        return res.status(404).json({ error: 'Document not found' });
      }  
      await document.destroy();
  
      res.json({ message: 'Document deleted successfully' });
    } catch (error) {
      console.error('Error deleting document:', error);
      res.status(500).json({ error: 'Server error' });
    }
};

