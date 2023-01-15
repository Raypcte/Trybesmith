import express from 'express';
import { readProducts, saveProducts } from '../controller/productsController';

const productRoute = express.Router();

productRoute.post('/products', saveProducts);
productRoute.get('/products', readProducts);

export default productRoute;
