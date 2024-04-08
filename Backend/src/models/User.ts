import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../Config/sequelize';

class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public profileImg!: string;
  public email!: string;
  public password!: string;
  public phoneNo!: string;
  public address!: string;
  public gender!: string;
  public bloodGroup!: string;
  public document!: string;
  public role!: 'Doctor' | 'Patient' | 'Admin';
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImg:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, 
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    document: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM('Doctor', 'Patient', 'Admin'), 
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;
