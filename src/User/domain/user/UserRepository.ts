import { user } from './user';

export interface UserRepository {
  createUser(user: user): Promise<void>;
  getUserById(id: number): Promise<user>;
  getUserByEmail(email: string): Promise<user>;
  updateUser(user: user): Promise<void>;
  deleteUser(id: number): Promise<void>;
  getAllUsers(): Promise<user[]>;
}
