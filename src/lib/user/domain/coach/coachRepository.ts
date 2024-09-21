
import { userRepository } from '../user/userRepository';
import { coachUsers } from './coachUsers';
import { userId } from '../user/userId';

export interface coachRepository extends userRepository {
  getCoachUsers(): Promise<coachUsers>;
  addCoachUsers(id: userId): Promise<void>;
  removeCoachUsers(id: userId): Promise<void>;
}
