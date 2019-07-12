import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IEvent} from '../shared/event';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent implements OnInit {
  event: IEvent;

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.event = this.eventService.find(+this.route.snapshot.params.id);
  }

  editEvent() {
    this.router.navigate(['/events/edit', this.route.snapshot.params.id]);
  }
}
