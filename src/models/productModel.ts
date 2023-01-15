import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { Product } from '../interfaces';

const create = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { ...product, id: insertId };
};

export default create;
