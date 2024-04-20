import { Sequelize } from 'sequelize';
import { sequelize } from  '../Config/sequelize';
import OTP from './OTP';
import User from './User';
import Doctor from './Doctor';
import Document from './Document';
import Clinic from './Clinic';
import Appointment from './Appointment';
import Address from './Address';


interface Database {
  sequelize: Sequelize;
  User: typeof User;
  OTP: typeof OTP;
  Document: typeof Document;
  Doctor: typeof Doctor;
  Clinic: typeof Clinic;
  Appointment: typeof Appointment;
  Address: typeof Address;
}

const db: Database = {} as Database;
db.sequelize = sequelize;
db.User = User;
db.Document = Document;
db.Doctor = Doctor;
db.Clinic = Clinic;
db.Appointment = Appointment;
db.Address = Address;
db.OTP = OTP;

export async function  sync_models() {
  db.sequelize.sync({ force: false, alter: false }).then(() => {
	console.log(`Database Synced...`)
  })
}

export default db;