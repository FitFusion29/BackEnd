import { UserId } from './UserId';
import { UserFullName } from './UserFullName';
import { UserEmail } from './UserEmail';
import { UserPassword } from './UserPassword';

export class user {
  id: UserId;
  fullName: UserFullName;
  email: UserEmail;
  password: UserPassword;

  constructor(
    public _id: UserId,
    public _fullName: UserFullName,
    public _email: UserEmail,
    public _password: UserPassword,
  ) {
    this.id = _id;
    this.fullName = _fullName;
    this.email = _email;
    this.password = _password;
  }
}
