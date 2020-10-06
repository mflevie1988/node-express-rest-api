import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import { get } from './controllers/alfresco.controller';

const app: express.Application = express();
app.use(cors());
const PORT = 4040;

app.get('/', get);

app.listen(PORT, () => {
  console.log(chalk.yellow(`⚡️[server]: ${chalk.green(`Server is running at https://localhost:${PORT}`)}`));
});
