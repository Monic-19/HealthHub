import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../Config/sequelize';
import User from './User';

class Document extends Model {
    public id!: number;
    public userId!: number;
    public documentUrl!: string;
    public docId!: string;
    public description!: string;
}

Document.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
        documentUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        modelName: 'Document',
    }
);

export default Document;
