import express from 'express';
import saveProducts from '../controller/productsController';

const productRoute = express.Router();

productRoute.post('/products', saveProducts); 

export default productRoute;
