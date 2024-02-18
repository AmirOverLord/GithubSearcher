import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// import api routes
app.use("/api", routes)
// Defualt route
app.get('/', (req: Request, res: Response) => res.send('Application works!'));

app.listen(PORT, () => console.log(`Application started on port ${PORT}!`));
