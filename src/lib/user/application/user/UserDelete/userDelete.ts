import { userRepository } from '../../../domain/user/userRepository';
import { userId } from '../../../domain/user/userId';

export class userDelete {
  constructor(private userRepository: userRepository) { }
  async run(id: string): Promise<void> {
    await this.userRepository.userDelete(new userId(id));
  }
}
