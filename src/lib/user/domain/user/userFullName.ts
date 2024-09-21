export class userFullName {
  value: string;

  constructor(public _fullName: string) {
    if (this.validateFullName(_fullName)) {
      this.value = _fullName;
    } else {
      throw new Error('Invalid full name');
    }
  }

  private validateFullName(fullName: string): boolean {
    if (fullName.length < 2 || fullName.length > 50) {
      throw new Error('Invalid full name length');
    }
    return true;
  }
}
