import express from 'express';
import productRoute from './routes/produtos';
import userRoute from './routes/users';

const app = express();

app.use(express.json());
app.use('/', productRoute);
app.use('/', userRoute);

export default app;
