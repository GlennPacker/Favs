import {Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import { TOASTR_TOKEN } from '../shared/toastr.service';
@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: any
  ) {}

  ngOnInit(): void {
    if (!this.authService.currentUser || !this.authService.currentUser.firstName) {
      this.router.navigate(['/events']);
    } else {
      this.firstName = new FormControl(
        this.authService.currentUser.firstName,
        [Validators.required, Validators.minLength(2)]
      );
      this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
      this.profileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      });
    }
  }

  handleCancel() {
    this.router.navigate(['/events']);
  }

  validLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  validFirstName() {
    return !(this.firstName.invalid && this.firstName.touched);
  }

  saveProfile(formData) {
    if (this.profileForm.invalid) return;

    this.authService.updateCurrentUser(formData);
    this.toastr.success('Profile Saved');
    this.router.navigate(['/events']);
  }
}
