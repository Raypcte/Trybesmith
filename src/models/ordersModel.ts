import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';

const findAll = async () => {
  const result = await connection.execute<ResultSetHeader>(
    `SELECT orders.id, orders.user_id AS userId,
      JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.orders
      INNER JOIN Trybesmith.products 
      ON Trybesmith.orders.id = Trybesmith.products.order_id
      GROUP BY orders.id;`,
  );

  return result;
};

export default findAll;
