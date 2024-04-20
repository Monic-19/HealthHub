import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../Config/sequelize';
import Address from './Address'; 
import User from './User';

class Clinic extends Model {
  public id!: number;
  public name!: string;
  public addressId!: number | null;
  public userId!: number | null;
  public fee!: number;
  public openingTime!: string;
  public closingTime!: string;
}


Clinic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Address,
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    fee: {
      type: DataTypes.FLOAT, 
      allowNull: false,
    },
    openingTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    closingTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Clinic',
  }
);

export default Clinic;
