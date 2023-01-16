import express from 'express';
import orderRoute from './routes/orders';
import productRoute from './routes/produtos';
import userRoute from './routes/users';

const app = express();

app.use(express.json());
app.use('/', productRoute);
app.use('/', userRoute);
app.use('/', orderRoute);

export default app;
