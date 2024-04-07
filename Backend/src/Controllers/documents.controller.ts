import User from "../Models/User";
import { Request, Response } from 'express';


interface DocumentType {
    id: number;
    userId: number;
    documentUrl: string;
    docId: string;
    description: string | null;
}


export const saveDocument = async(req: Request,res: Response) => {
    try{

    } catch(error){
        
    }
}