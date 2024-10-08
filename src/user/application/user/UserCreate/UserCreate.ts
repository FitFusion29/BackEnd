
import { user } from '../../../domain/user/user';
import { userRepository } from '../../../domain/user/userRepository';
import { userId } from '../../../domain/user/userId';
import { userFullName } from '../../../domain/user/userFullName';
import { userEmail } from '../../../domain/user/userEmail';
import { userPassword } from '../../../domain/user/userPassword';

export class UserCreate {
  constructor(private repository: userRepository) { }

  async run(
    id: number,
    fullName: string,
    email: string,
    password: string,
  ): Promise<void> {
    const newUser = new user(
      new userId(id),
      new userFullName(fullName),
      new userEmail(email),
      new userPassword(password),
    );
    return this.repository.userCreate(newUser);
  }
}
