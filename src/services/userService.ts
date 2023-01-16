import { User } from '../interfaces';
import create from '../models/userModel';

const saveUserService = async (user: User) => {
  const newUser = await create(user);
  if (newUser) return newUser;
};

export default saveUserService;
