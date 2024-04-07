import express, { Request, Response } from 'express';
import cors from 'cors';
import { sync_models } from "./Models/index";
import { sequelize } from "./Config/sequelize";
import appointmentRouter from './Route/appointment.route';
import authRouter from './Route/auth.route';
import documentRouter from './Route/document.route';
import userRouter from './Route/user.route';
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

    app.use('/api/v1/appointments',appointmentRouter);
    app.use('/api/v1/auth',authRouter);
    app.use('/api/v1/documents',documentRouter);
    app.use('/api/v1/users',userRouter);


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
