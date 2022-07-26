export interface IUserInfo {
  name:string,
  age:number,
  idCard?:string,
}
export interface IAccount {
  userName:string,
  password:string,
  createAt?: Date,
}

export interface IUserStore {
  userInfo: IUserInfo,
  account:IAccount,
  role: any[]
}

