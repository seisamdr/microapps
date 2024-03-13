export interface ILogin {
  username: string;
  password: string;
}

export interface IRegister {
  fullname: string;
  address: string;
  gender: string;
  username: string;
  password: string;
}

export interface FormErrors {
  fullname?: string;
  address?: string;
  gender?: string;
  username?: string;
  password?: string;
}
