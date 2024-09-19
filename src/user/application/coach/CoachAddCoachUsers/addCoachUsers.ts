import { coachRepository } from '../../../domain/coach/coachRepository';
import { userId } from '../../../domain/user/userId';
import { UserNotFoundError } from '../../../domain/user/userNotFoundError';
export class addCoachUsers {
  constructor(private repository: coachRepository) { }
  async run(id: number): Promise<void> {
    const user = this.repository.addCoachUsers(new userId(id));
    if (!user) {
      throw new UserNotFoundError('user not found');
    }
  }
}
