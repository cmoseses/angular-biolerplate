export interface UserOption {
  readonly UserId: string;
  readonly Password: string;
}

export class User {
  readonly userid: string;
  readonly password: string;

  constructor(userOption: UserOption) {
    this.userid = userOption.UserId;
    this.password = userOption.Password;
  }
}
