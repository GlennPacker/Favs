import { Component } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {ISession} from '../shared/ISession';
import {EventService} from '../shared';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchFor = '';

  constructor(public authService: AuthService, private eventService: EventService) {}

  doSearch(searchFor) {
    this.eventService.searchSessions(searchFor).subscribe(
      sessions => {
        console.log(sessions);
      }
    );

  }
}
