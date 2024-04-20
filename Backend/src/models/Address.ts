import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../Config/sequelize'; 
import User from './User'; 

class Address extends Model {
  public id!: number;
  public pincode!: string;
  public building!: string;
  public area!: string;
  public landmark!: string;
  public townCity!: string;
  public state!: string;
  public userId!: number;
}

Address.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    pincode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    building: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    landmark: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    townCity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Address',
  }
);

export default Address;
