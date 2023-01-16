import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { User } from '../interfaces';

const create = async (user: User): Promise<User> => {
  const { level, password, username, vocation } = user;
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (level, password, username, vocation) VALUES (?, ?, ?, ?)',
    [level, password, username, vocation],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { ...user, id: insertId };
};

export default create;
