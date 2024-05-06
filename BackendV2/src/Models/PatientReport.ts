import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../Config/sequelize';
import User from './User';

class PatientReport extends Model {}

PatientReport.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        doctorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: User, 
              key: 'id'
            }
        },
        patientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: User, 
              key: 'id'
            }
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mode: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        summary: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        prescriptionWritten: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        prescriptionPhoto: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'PatientReport',
    }
);

PatientReport.belongsTo(User, {foreignKey: 'patientId' , as: 'patient'});
PatientReport.belongsTo(User, {foreignKey: 'doctorId' , as: 'doctor'});

export default PatientReport;
