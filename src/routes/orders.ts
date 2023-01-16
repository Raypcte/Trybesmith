import express from 'express';
import readOrders from '../controller/ordersController';

const orderRoute = express.Router();

orderRoute.get('/orders', readOrders);

export default orderRoute;