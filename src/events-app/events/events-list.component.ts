import {Component, OnInit} from '@angular/core';
import { EventService } from '../shared/event.service';
import {ToastrService} from '../shared/toastr.service';

@Component({
  templateUrl: './events-list.component.html',
  selector: 'app-events-list'
})

export class EventsListComponent implements OnInit {
  events: any[];

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService) {}

  ngOnInit() {
    this.events = this.eventService.get();
  }

  handleEventClicked = (data) => {
    this.toastrService.success(data.name, 'Event:');
    console.log('user clicked event:', data);
  }
}
