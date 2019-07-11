import {Injectable} from '@angular/core';
import {IUser} from '../models/user.model';
import {IAuthService} from './IAuthService';

@Injectable()
export class AuthService implements IAuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      userName: 'gp',
      lastName: 'packer',
      firstName: 'glenn',
      id: 1
    };
    return this.currentUser;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(data: any) {
    this.currentUser.lastName = data.lastName;
    this.currentUser.firstName = data.firstName;
  }
}
