import { Sequelize } from 'sequelize';
import { sequelize } from  '../Config/sequelize';
import User from './User';
import Appointment from './Appointment';
import Documents from './Documents';

interface Database {
  sequelize: Sequelize;
  User: typeof User;
  Appointment: typeof Appointment;
  Documents: typeof Documents;
}

const db: Database = {} as Database;
db.sequelize = sequelize;
db.User = User;
db.Appointment = Appointment;
db.Documents = Documents;

export async function  sync_models(){
    db.sequelize.sync({ force: true, alter: true }).then(() => {
		console.log(` Database Synced...`)
    })
}
export default db;