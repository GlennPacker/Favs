import { Component } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName: string;
  password: string;
  mouseoverLogin = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(credentials) {
    this.authService.loginUser(credentials.userName, credentials.password);
    if (this.authService.isAuthenticated()) this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
