import { user } from "../user/user";
import { userId } from "../user/userId";
import { userFullName } from "../user/userFullName";
import { userEmail } from "../user/userEmail";
import { userPassword } from "../user/userPassword";
import { coachUsers } from "../coach/coachUsers";

export class coach extends user {
  users: coachUsers;
  constructor(id: userId, name: userFullName, email: userEmail, password: userPassword, users: coachUsers) {
    super(id, name, email, password);
    this.users = users;
  }
}
