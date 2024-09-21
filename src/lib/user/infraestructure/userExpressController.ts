
import { NextFunction, Request, Response } from 'express';
import { ServiceContainer } from '../../../../Shared/ServiceContainer';
import { UserNotFoundError } from '../domain/user/userNotFoundError';


export class UserExpressController {
  async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.body as { id: number };
      const user = await ServiceContainer.user.getUserById.run(id);
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        res.status(404).json({ error: error.message });
      }

      throw error;
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { n, name, email, password } = req.body as { n: number; name: string; email: string; password: string };
    const createdUser = await ServiceContainer.user.create.run(n, name, email, password);
    res.status(201).json(createdUser);
  }

  async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id, name, email, password } = req.body as { id: number; name: string; email: string; password: string };
    const updatedUser = await ServiceContainer.user.update.run(id, name, email, password);
    res.status(204).json(updatedUser);
  }

  async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.body as { id: number };
    await ServiceContainer.user.delete.run(id);
    res.status(204).send();
  }

  async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    const users = await ServiceContainer.user.getAllUsers.run();
    res.status(200).json(users);
  }

  async getUserByEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
    const user = await ServiceContainer.user.getUserByEmail.run(req.params.email);
    res.status(200).json(user);
  }
}
