import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {EventService} from '../shared/event.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {
  constructor(
    private eventService: EventService,
    private router: Router
  ) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    const exists = !!this.eventService.find(+route.params.id);

    if (!exists) this.router.navigate(['/404']);

    return exists;
  }
}
