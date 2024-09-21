import { coachRepository } from "../../../domain/coach/coachRepository";
import { coachUsers } from "../../../domain/coach/coachUsers";

export class coachGetCoachUsers {
  constructor(private repository: coachRepository) { }
  async run(): Promise<coachUsers> {
    return await this.repository.getCoachUsers();
  }
}
