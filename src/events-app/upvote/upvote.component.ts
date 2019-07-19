import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})

export class UpvoteComponent {
  @Output() vote = new EventEmitter();
  @Input() count: number;
  @Input() set voted(newVal) {
    this.iconColor = newVal ? 'red': 'white';
  }
  iconColor: string;


  constructor(public authService: AuthService) {}

  onClick() {
    this.vote.emit({});
  }


}
