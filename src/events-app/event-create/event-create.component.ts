import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent {
  isDirty = false;

  constructor(private router: Router) {}

  handleCancelClick = () => {
    this.router.navigate(['/events']);
  }
}
