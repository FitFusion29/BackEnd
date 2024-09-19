import { user } from "../../../domain/user/user";
import { userRepository } from "../../../domain/user/userRepository";
import { userEmail } from "../../../domain/user/userEmail";
import { UserNotFoundError } from "../../../domain/user/userNotFoundError";


export class getUserByEmail {
  constructor(private readonly userRepository: userRepository) { }
  async run(email: string): Promise<user> {
    const user = await this.userRepository.userGetUserByEmail(new userEmail(email));
    if (!user) {
      throw new UserNotFoundError('User not found');
    }
    return user;
  }
}
