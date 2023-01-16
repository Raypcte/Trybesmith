import { Request, Response } from 'express';
import { createToken } from '../auth';
import saveUserService from '../services/userService';
import statusCodes from '../statusCodes';

const saveUser = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const newUser: any = await saveUserService(user);
    const token = createToken(newUser);
    res.status(statusCodes.CREATED).json({ token });
  } catch (error) {
    console.log(error);
  }
};

export default saveUser;
