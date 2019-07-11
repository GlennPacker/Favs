import {IUser} from '../models/user.model';

export interface IAuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string): IUser;

  isAuthenticated(): boolean;
}
