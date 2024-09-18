import { admin } from ".//admin";
import { UserRepository } from "../user/UserRepository";
import { AdminQuotes } from "./AdminQuotes";

export interface AdminRepository extends UserRepository {
  createNewQoute: () => Promise<void>;
  getQuotes: () => Promise<AdminQuotes>;
  getAdmins: () => Promise<admin[]>;
}
