import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../Config/sequelize';
import User from './User';

class Appointment extends Model {
  public id!: number;
  public patientId!: number;
  public doctorId!: number;
  public date!: Date; 
  public time!: string; 
  public token!: string;
  public description!: string | null;
  public mode!: boolean;
  public videoLink!: string | null; 
}

Appointment.init(
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
    description:{
      type: DataTypes.STRING,
      allowNull: true, 
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    startingTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endingTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mode: {
      type: DataTypes.BOOLEAN, 
      allowNull: false,
    },
    videoLink: {
      type: DataTypes.STRING, 
      allowNull: true, 
    },
    token: {
      type: DataTypes.STRING(512), 
      allowNull: false,
      defaultValue: () => Math.random().toString(36).slice(2),
    }
  },
  {
    sequelize,
    modelName: 'Appointment',
  }
);

Appointment.belongsTo(User, {foreignKey: 'patientId' });
Appointment.belongsTo(User, {foreignKey: 'doctorId' });

export default Appointment;
