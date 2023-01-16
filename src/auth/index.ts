import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT, User } from '../interfaces';

dotenv.config();

const secret: string = process.env.JWT_SECRET || '123';
const jwtConfig: JWT | any = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export const createToken = (user: User) => {
  const token = jwt.sign(
    { data: { userId: user.id } }, 
    secret, 
    jwtConfig,
  );

  return token;
};

export const validateToken = (req: Request | any, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const decoded: string | any = jwt.verify(token, secret);
    req.userId = decoded.data.userId;

    if (decoded) {
      req.decodedToken = decoded;
    }

    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
};
