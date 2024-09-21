import { user } from "../user/user";
import { UserId } from "../user/userId";
import { UserFullName } from "../user/userFullName";
import { UserEmail } from "../user/userEmail";
import { UserPassword } from "../user/userPassword";
import { AdminQuotes } from "./AdminQuotes";

export class admin extends user {
  quotes: AdminQuotes;
  constructor(id: UserId, name: UserFullName, email: UserEmail, password: UserPassword, quote: AdminQuotes) {
    super(id, name, email, password)
    this.quotes = quote
  }
}

