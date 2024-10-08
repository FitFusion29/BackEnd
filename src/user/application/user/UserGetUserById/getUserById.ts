import { user } from "../../../domain/user/user";
import { userRepository } from "../../../domain/user/userRepository";
import { userId } from "../../../domain/user/userId";
import { UserNotFoundError } from "../../../domain/user/userNotFoundError";


export class GetUserById {
  constructor(private readonly userRepository: userRepository) { }
  async run(id: number): Promise<user> {
    const user = await this.userRepository.userGetUserById(new userId(id));
    if (!user) {
      throw new UserNotFoundError('User not found');
    }
    return user;
  }
}
