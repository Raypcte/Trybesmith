import express from 'express';
import saveUser from '../controller/userController';

const userRoute = express.Router();

userRoute.post('/users', saveUser);

export default userRoute;
