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
  addMode = false;
  filterBy = 'All';

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.event = this.eventService.find(+this.route.snapshot.params.id);
  }

  editEvent() {
    this.router.navigate(['/events/edit', this.route.snapshot.params.id]);
  }

  addSession() {
    this.addMode = true;
  }

  applyFilter(filterBy : string) {
    this.filterBy = filterBy;
  }
  saveNewSession(newSession) {
    newSession.id = Math.max.apply(null, this.event.sessions.map(session => session.id)) + 1;
    this.event.sessions.push(newSession);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelNewSession() {
    this.addMode = false;
  }

}
