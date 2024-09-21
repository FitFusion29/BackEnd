
import { Request, Response } from 'express';
import { ServiceContainer } from '../../../Shared/ServiceContainer';
import { UserNotFoundError } from '../../../src/user/domain/user/userNotFoundError';


export class UserExpressController {
  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await ServiceContainer.user.getUserById.run(req.params.id);
      return res.json(user).status(200);
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ error: error.message });
      }

      throw error;
    }
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const { id, name, email, password } = req.body as { id: number; name: string; email: string; password: string };
    const createdUser = await ServiceContainer.user.create.run(id, name, email, password);
    return res.status(201).json(createdUser);
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    const { id, name, email, password } = req.body as { id: number; name: string; email: string; password: string };
    const updatedUser = await ServiceContainer.user.update.run(id, name, email, password);
    return res.status(204).json(updatedUser);
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    await ServiceContainer.user.delete.run(req.params.id);
    return res.status(204).send();
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    const users = await ServiceContainer.user.getAllUsers.run();
    return res.status(200).json(users);
  }

  async getUserByEmail(req: Request, res: Response): Promise<void> {
    const user = await ServiceContainer.user.getUserByEmail.run(req.params.email);
    return res.status(200).json(user);
  }
}
