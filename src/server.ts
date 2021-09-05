import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import config from './config';
import router from './middleware/logging';
import routes from './routes/index.routes';

const app: express.Application = express();
const { serverPort, serverHost } = config;

app.use(cors());
app.use(router);
app.use('/api', routes);

app.listen(serverPort, () => {
  console.log(chalk.yellow(`⚡️[server]: ${chalk.green(`Server is running at https://${serverHost}:${serverPort}`)}`));
});
