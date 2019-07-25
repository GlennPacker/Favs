import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IEvent} from '../shared/event';
import {EventService} from '../shared';
import {catchError} from 'rxjs/operators';

@Component({
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})

export class EventCreateComponent implements OnInit {
  isDirty = false;
  event: IEvent;

  constructor(private router: Router, private eventService: EventService, private route: ActivatedRoute) {}

  handleCancelClick = () => {
    this.router.navigate(['/events']);
  }

  saveEvent(data: IEvent) {
    this.eventService.addEvent(data);
    this.router.navigate(['/events']);
  }

  ngOnInit() {
    // tslint:disable-next-line:curly
    if (this.route.snapshot.params.id) {
      this.eventService.find(+this.route.snapshot.params.id).subscribe(event => {
        this.event = event;
      });
      // tslint:disable-next-line:curly
    } else {
      this.event = {
        id: null,
        name: null,
        date: null,
        online: null,
        price: null,
        time: null,
        imageUrl: null,
        sessions: [],
        location: {
          address: null,
          city: null,
          country: null
        },
      };
    }
  }
}
