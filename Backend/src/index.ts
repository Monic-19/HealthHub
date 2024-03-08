import express, { Request, Response } from 'express';
import cors from 'cors';
import { sync_models } from "./models/index";
import { sequelize } from "./Config/sequelize";
import dotenv from 'dotenv';



async function main(){
  try {
    dotenv.config();
    const app = express();
    const port = 8081;
    
    // Importent middleWare....
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    await sequelize.authenticate();
    sync_models();

    app.get('/', (req: Request, res: Response) => {
      res.send('Hello World');
    });
    
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  } catch (error) {
    console.error('An error occurred during initialization:', error);
    process.exit(1);
  }
}

main();
