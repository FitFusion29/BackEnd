export class userPassword {
  value: string;
  constructor(public _password: string) {
    if (this.validatePassword(_password)) {
      this.value = _password;
    } else {
      throw new Error('Invalid password');
    }
  }
  private validatePassword(password: string): boolean {
    if (password.length < 6 || password.length > 50) {
      throw new Error('Invalid password length');
    }
    return true;
  }
}
