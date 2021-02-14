import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import config from './config/config';
import router from './middleware/logging';
import routes from './routes/index.routes';

const app: express.Application = express();
const { port } = config.server;

app.use(cors());
app.use(router);
app.use('/api', routes);

app.listen(port, () => {
  console.log(chalk.yellow(`⚡️[server]: ${chalk.green(`Server is running at https://localhost:${port}`)}`));
});
