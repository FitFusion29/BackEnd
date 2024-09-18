
import { UserRepository } from '../user/UserRepository';
import { CoachUsers } from './CoachUsers';
import { UserId } from '../user/UserId';

export interface coachRepository extends UserRepository {
  getCoachUsers(): Promise<CoachUsers>;
  addCoachUsers(id: UserId): Promise<void>;
  removeCoachUsers(id: UserId): Promise<void>;
}
