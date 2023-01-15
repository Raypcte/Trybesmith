import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import { Product } from '../interfaces';
import saveProductsService from '../services/productServices';

const saveProducts = async (req: Request, res: Response) => {
  const product: Product = req.body;
  try {
    const newProduct = await saveProductsService(product);
    res.status(statusCodes.CREATED).json(newProduct);
  } catch (error) {
    console.log(error);
  }
};

export default saveProducts;
