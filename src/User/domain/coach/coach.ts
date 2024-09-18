import { user } from "../user/user";
import { UserId } from "../user/UserId";
import { UserFullName } from "../user/UserFullName";
import { UserEmail } from "../user/UserEmail";
import { UserPassword } from "../user/UserPassword";
import { CoachUsers } from "../coach/CoachUsers";

export class coach extends user {
  users: CoachUsers;
  constructor(id: UserId, name: UserFullName, email: UserEmail, password: UserPassword, users: CoachUsers) {
    super(id, name, email, password);
    this.users = users;
  }
}
