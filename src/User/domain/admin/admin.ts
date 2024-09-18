import { user } from "../user/user";
import { UserId } from "../user/UserId";
import { UserFullName } from "../user/UserFullName";
import { UserEmail } from "../user/UserEmail";
import { UserPassword } from "../user/UserPassword";
import { AdminQuotes } from "./AdminQuotes";

export class admin extends user {
  quotes: AdminQuotes;
  constructor(id: UserId, name: UserFullName, email: UserEmail, password: UserPassword, quote: AdminQuotes) {
    super(id, name, email, password)
    this.quotes = quote
  }
}

