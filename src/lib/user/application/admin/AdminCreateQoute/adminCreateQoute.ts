
import { adminRepository } from '../../../domain/admin/adminRepository';
import { adminQoute } from '../../../domain/admin/adminQoute';

export class adminCreateQoute {
  constructor(private repository: adminRepository) { }

  async run(id: number, quote: string) {
    return this.repository.createNewQoute(new adminQoute(id, quote));
  }
}
