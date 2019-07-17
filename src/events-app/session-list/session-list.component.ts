import {Component, Input} from '@angular/core';
import {ISession} from '../shared/ISession';

@Component({
  selector: 'session-list',
  styleUrls: ['./session-list.component.css'],
  templateUrl: 'session-list.component.html'
})

export class SessionListComponent {
  @Input() sessions: ISession[];
}
