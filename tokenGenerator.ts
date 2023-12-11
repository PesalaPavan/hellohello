import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import { SignOptions } from 'jsonwebtoken';

dotenv.config();

interface User {
  id: number;
  // Other user properties...
}

const user: User = {
  id: 2, // Replace with the actual user ID
  // Other user data...
};

const secretKey = process.env.SECRET_KEY as string;

const tokenData = {
  userId: user.id,
};

const tokenOptions: SignOptions = {
  expiresIn: '2 days',
};

const token = jwt.sign(tokenData, secretKey, tokenOptions);
console.log(JSON.stringify(jwt.decode(token)));
