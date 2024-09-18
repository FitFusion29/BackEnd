export class UserEmail {
  value: string;

  constructror(_email: string) {
    if (this.validateEmail(_email)) {
      this.value = _email;
    } else {
      throw new Error('Invalid email');
    }
  }

  private validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}

