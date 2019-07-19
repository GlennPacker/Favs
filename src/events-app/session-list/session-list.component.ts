import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from '../shared/ISession';
import {AuthService} from '../shared/auth.service';
import {VoterService} from '../shared/voter.service';
import {Router} from '@angular/router';

@Component({
  selector: 'session-list',
  styleUrls: ['./session-list.component.css'],
  templateUrl: 'session-list.component.html'
})

export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  filteredSessions = this.sessions;

  constructor(
    private authService: AuthService,
    private voterService: VoterService,
    private router: Router
  ) {}

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filterBy) {
    if (filterBy === 'All') {
      this.filteredSessions = [...this.sessions];
    } else {
      this.filteredSessions = [...this.sessions.filter(i => i.level === filterBy)];
    }
  }

  toggleVote(session: ISession) {
    if (!this.authService.isAuthenticated()) {
      return this.router.navigate(['/user/login']);
    }
    const user = this.authService.currentUser.userName;
    if (this.userHasVoted(session)) {
      this.voterService.removeVote(session, user);
    } else {
      this.voterService.addVote(session, user);
    }
  }

  userHasVoted(session) {
    return this.authService.isAuthenticated() && this.voterService.hasVoted(session, this.authService.currentUser.userName);
  }
}
