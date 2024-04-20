import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'HealthHub',
  username: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432, 
});
