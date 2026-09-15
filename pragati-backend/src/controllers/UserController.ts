import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export class UserController extends BaseController {
  public getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          created_at: true
        }
      });
      this.handleSuccess(res, { users });
    } catch (error) {
      this.handleError(error, res, 'UserController.getUsers');
    }
  };

  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, name, role, password } = req.body;
      const password_hash = await bcrypt.hash(password || 'password123', 10);
      const user = await prisma.user.create({
        data: {
          email,
          name,
          role,
          password_hash
        },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          created_at: true
        }
      });
      this.handleSuccess(res, { user });
    } catch (error) {
      this.handleError(error, res, 'UserController.createUser');
    }
  };
}
