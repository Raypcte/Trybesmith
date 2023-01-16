export interface Product {
  id?: number;
  name: string;
  amount: string;
}

export interface User {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface JWT {
  expiresIn: string;
  algorithm: string;
}
