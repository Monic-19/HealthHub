import express, { Request, Response } from 'express';
import cors from 'cors';
import { sync_models } from "./Models/index";
import { sequelize } from "./Config/sequelize";
import appointmentRoute from './Route/appointment.route';
import authRoute from './Route/auth.route';
import dotenv from 'dotenv';



async function main(){
  try {
    dotenv.config();
    const app = express();
    
    // Important middleWare....
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    await sequelize.authenticate();
    sync_models();

    app.use('/api/v1/appointments',appointmentRoute);
    app.use('/api/v1/auth',authRoute);


    app.get('/', (req: Request, res: Response) => {
      res.send('Hello World');
    });
    
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('An error occurred during initialization:', error);
    process.exit(1);
  }
}

main();
