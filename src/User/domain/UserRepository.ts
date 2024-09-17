import { User } from './user';

export interface UserRepository {
  createUser(user: User): Promise<void>;
  getUserById(id: number): Promise<User>;
  getUserByEmail(email: string): Promise<User>;
  updateUser(user: User): Promise<void>;
  deleteUser(id: number): Promise<void>;
  getAllUsers(): Promise<User[]>;
}
