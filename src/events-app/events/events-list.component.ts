import {Component, OnInit} from '@angular/core';
import {ToastrService} from '../shared/toastr.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: any;

  constructor(
    private toastrService: ToastrService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data.events;
  }

  handleEventClicked = (data) => {
    this.toastrService.success(data.name, 'Event:');
  }
}
