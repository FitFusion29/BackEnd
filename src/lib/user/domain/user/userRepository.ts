import { user } from './user';
import { userId } from './userId';
import { userEmail } from './userEmail';

export interface userRepository {
  userCreate(user: user): Promise<void>;
  userGetUserById(id: userId): Promise<user | null>;
  userGetUserByEmail(email: userEmail): Promise<user | null>;
  userUpdate(user: user): Promise<void>;
  userDelete(id: userId): Promise<void>;
  userGetAllUsers(): Promise<user[]>;
}
