import { user } from "../../../domain/user/user";
import { userRepository } from "../../../domain/user/userRepository";


export class userGetAllUsers {
  constructor(private repository: userRepository) { }

  async run(): Promise<user[]> {
    {
      return this.repository.userGetAllUsers();
    }
  }
}
