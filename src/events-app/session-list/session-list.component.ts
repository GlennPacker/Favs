import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from '../shared/ISession';

@Component({
  selector: 'session-list',
  styleUrls: ['./session-list.component.css'],
  templateUrl: 'session-list.component.html'
})

export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  filteredSessions = this.sessions;


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
}
