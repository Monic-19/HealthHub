import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Importent 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
      

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on ${port} helo`);
});
