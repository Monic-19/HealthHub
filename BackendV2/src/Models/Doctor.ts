import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../Config/sequelize';
import User from './User'; 
import Document from './Document'; 
import Clinic from './Clinic';
import Address from './Address';

class Doctor extends Model {
  public id!: number;
  public userId!: number | null;
  public clinicId!: number | null;
  public education!: string;
  public experience!: number;
  public specialization!: string;
  public medicalField!: string;
  public readonly user?: User;
  public readonly clinic?: Clinic;
  public readonly address?: Address; 
}

Doctor.init(
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
        key: 'id',
      },
    },
    clinicId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Clinic,
        key: 'id',
      }
    },
    education: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    experience: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    medicalField: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Doctor',
  }
);

Doctor.belongsTo(User, { foreignKey: 'userId' , as: 'user' });
Doctor.belongsTo(Clinic, { foreignKey: 'clinicId', as: 'clinic' });

export default Doctor;
