import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../Config/sequelize';
import User from './User'; 
import Document from './Document'; 

class Doctor extends Model {
  public id!: number;
  public userId!: number;
  public education!: string;
  public degree!: number | null;
  public experience!: number;
  public specialization!: string;
  public medicalField!: string;
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
    education: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    degree: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Document,
        key: 'id',
      },
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


export default Doctor;
