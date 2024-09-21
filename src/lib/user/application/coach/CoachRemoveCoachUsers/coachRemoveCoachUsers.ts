import { coachRepository } from "../../../domain/coach/coachRepository";
import { userId } from "../../../domain/user/userId";
import { UserNotFoundError } from "../../../domain/user/userNotFoundError";

export class coachRemoveCoachUsers {
  constructor(private repository: coachRepository) { }
  async run(id: number): Promise<void> {
    const user = await this.repository.removeCoachUsers(new userId(id));
    if (!id) {
      throw new UserNotFoundError('User not found');
    }
    return user;
  }
}
