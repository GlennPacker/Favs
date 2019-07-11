import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEvent} from '../shared/event';

@Component({
  templateUrl: './event-thumbnail.component.html',
  selector: 'app-event-thumbnail',
  styleUrls: ['./event-thumbnail.component.css']
})

export class EventThumbnailComponent {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();
  someProp: any = 1;

  handleClick = () => {
    this.eventClick.emit(this.event.name);
  }
}
