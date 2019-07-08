import { Routes } from '@angular/router';
import {EventsListComponent} from './events-app/events/events-list.component';
import {EventDetailsComponent} from './events-app/event-details/event-details.component';
import {EventCreateComponent} from './events-app/event-create/event-create.component';
import {Error404Component} from './events-app/errors/error-404.component';
import {EventRouteActivatorService} from './events-app/event-details/event-route-activator.service';
import {EventsListResolverService} from './events-app/events/events-list-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsListComponent,
    resolve: {events: EventsListResolverService}
  },
  {
    path: 'events/create',
    component: EventCreateComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService]
  },
  {
    path: 'user',
    loadChildren: './events-app/user/user.module#UserModule'
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  }
]
