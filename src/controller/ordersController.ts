import { Request, Response } from 'express';
import readOrdersServices from '../services/ordersServices';
import statusCodes from '../statusCodes';

const readOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await readOrdersServices();
    res.status(statusCodes.OK).json(orders);
  } catch (error) {
    console.log(error);
  }
};

export default readOrders;
