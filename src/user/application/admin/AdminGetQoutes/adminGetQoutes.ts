import { adminQoute } from '../../../domain/admin/adminQoute'
import { adminRepository } from '../../../domain/admin/adminRepository';


export class adminGetQoutes {
  constructor(private repository: adminRepository) { }

  async run(): Promise<adminQoute> {
    return this.repository.getQoutes();
  }
}
