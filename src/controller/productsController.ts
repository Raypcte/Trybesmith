import { Request, Response } from 'express';
import { ResultSetHeader } from 'mysql2';
import statusCodes from '../statusCodes';
import { Product } from '../interfaces';
import { readProductsServices, saveProductsService } from '../services/productServices';

export const saveProducts = async (req: Request, res: Response) => {
  const product: Product = req.body;
  try {
    const newProduct = await saveProductsService(product);
    res.status(statusCodes.CREATED).json(newProduct);
  } catch (error) {
    console.log(error);
  }
};

export const readProducts = async (_req: Request, res: Response) => {
  try { 
    const allProducts: ResultSetHeader | undefined = await readProductsServices();
    res.status(statusCodes.OK).json(allProducts);
  } catch (error) {
    console.log(error);
  }
};
