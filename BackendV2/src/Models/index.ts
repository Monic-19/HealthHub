import { Sequelize } from 'sequelize';
import { sequelize } from  '../Config/sequelize';
import OTP from './OTP';
import User from './User';
import Doctor from './Doctor';
import Document from './Document';
import Clinic from './Clinic';
import Appointment from './Appointment';
import Address from './Address';
import Review from './Review';
import PatientReport from './PatientReport';

interface Database {
  sequelize: Sequelize;
  User: typeof User;
  OTP: typeof OTP;
  Document: typeof Document;
  Doctor: typeof Doctor;
  Clinic: typeof Clinic;
  Appointment: typeof Appointment;
  Address: typeof Address;
  Review: typeof Review;
  PatientReport: typeof PatientReport;
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
db.Review = Review;
db.PatientReport = PatientReport;

export async function  sync_models() {
  db.sequelize.sync({ force: true, alter: true }).then(() => {
	console.log(`Database Synced...`)
  })
}

export default db;