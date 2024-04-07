import User from "../Models/User";
import { Request, Response } from 'express';
import Documents from "../Models/Documents";


export const saveDocument = async (req: Request, res: Response) => {
    try {
        const { userId, documentUrl, docId, description } = req.body;

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const newDocument = await Documents.create({
            userId,
            documentUrl,
            docId,
            description
        });

        return res.status(201).json({ success: true, message: 'Document saved successfully', document: newDocument });
    } catch (error) {
        console.error('Error saving document:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const removeDocument = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const document = await Documents.findByPk(id);
        if (!document) {
            return res.status(404).json({ message: 'Document not found' });
        }

        await document.destroy();

        return res.status(200).json({ success: true, message: 'Document removed successfully' });
    } catch (error) {
        console.error('Error removing document:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const showDocuments = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const documents = await Documents.findAll({
            where: {
                userId: userId
            }
        });

        return res.status(200).json(documents);
    } catch (error) {
        console.error('Error fetching documents:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};