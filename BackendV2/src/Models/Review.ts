import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../Config/sequelize';
import User from './User';

class Review extends Model {
  public id!: number;
  public userId!: number; // User who is being reviewed
  public reviewerId!: number; // User who is writing the review
  public rating!: number;
  public comment!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Review.init(
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
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'Review',
  }
);

Review.belongsTo(User, { foreignKey: 'userId', as: 'user' }); 
export default Review;
