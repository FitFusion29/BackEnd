export class UserId {
  value: number;

  constructor(public _value: number) {
    if (UserId.isValid(_value)) {
      this.value = _value;
    } else {
      throw new Error('Invalid user id');
    }
  }

  private static isValid(value: number): boolean {
    return value > -1;
  }
}
