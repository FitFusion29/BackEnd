import { user } from './user';
import { userId } from './userId';
import { userEmail } from './userEmail';

export interface userRepository {
  userCreate(user: user): Promise<void>;
  userGetUserById(id: userId): Promise<user>;
  userGetUserByEmail(email: userEmail): Promise<user>;
  userUpdate(user: user): Promise<void>;
  userDelete(id: userId): Promise<void>;
  userGetAllUsers(): Promise<user[]>;
}
