import { userId } from './userId';
import { userFullName } from './userFullName';
import { userEmail } from './userEmail';
import { userPassword } from './userPassword';

export class user {
  id: userId;
  fullName: userFullName;
  email: userEmail;
  password: userPassword;

  constructor(
    public _id: userId,
    public _fullName: userFullName,
    public _email: userEmail,
    public _password: userPassword,
  ) {
    this.id = _id;
    this.fullName = _fullName;
    this.email = _email;
    this.password = _password;
  }
}
