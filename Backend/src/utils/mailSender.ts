import nodemailer, { Transporter } from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();

const mailSender = async (email: string, title: string, body: string): Promise<any> => {
    try {
        let transporter: Transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST || '',
            auth: {
                user: process.env.MAIL_USER || '',
                pass: process.env.MAIL_PASS || '',
            }
        });

        let info = await transporter.sendMail({
            from: 'StudyNotion || CodeHelp - by Babbar',
            to: email,
            subject: title,
            html: body,
        });

        console.log(info);
        return info;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default mailSender;
