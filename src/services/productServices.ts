import { create, readAll } from '../models/productModel';
import { Product } from '../interfaces';

export const saveProductsService = async (product: Product) => {
  const newProduct = await create(product);
  if (product) return newProduct;
};

export const readProductsServices = async () => {
  const allProducts = await readAll();
  if (allProducts) return allProducts[0];
};
