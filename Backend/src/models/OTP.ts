import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../Config/sequelize';
import mailSender from '../utils/mailSender';
import { emailVerificationTemplate } from '../Template/emailVerificationTemplate';

class OTP extends Model { 
    public email!: string;
    public otp!: number;
    async sendVerificationEmail() {
        try {
            const mailResponse = await mailSender(
                this.email,
                'Verification Email',
                await emailVerificationTemplate({ otp: this.otp })
            );
            console.log('Email sent successfully:', mailResponse);
        } catch (error) {
            console.log('Error occurred while sending email:', error);
            throw error;
        }
    }
}

OTP.init(
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otp: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'OTP',
        hooks: {
            async beforeCreate(otp) {
                try {
                    await otp.sendVerificationEmail();
                } catch (error) {
                    console.error('Error sending verification email:', error);
                }
            },
        },
    }
);

export default OTP;
