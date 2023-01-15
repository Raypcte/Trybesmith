import create from '../models/productModel';
import { Product } from '../interfaces';

const saveProductsService = async (product: Product) => {
  const newProduct = await create(product);
  if (product) return newProduct;
};

export default saveProductsService;
