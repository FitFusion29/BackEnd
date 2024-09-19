import { admin } from ".//admin";
import { userRepository } from "../user/userRepository";
import { adminQoute } from "./adminQoute";

export interface adminRepository extends userRepository {
  createNewQoute(quote: adminQoute): Promise<void>;
  getQoutes(): Promise<adminQoute>;
  getAdmins(): Promise<admin[]>;
}
