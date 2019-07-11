import { Routes } from '@angular/router';
import { EventsListComponent } from './events-app/events/events-list.component';
import { EventDetailsComponent } from './events-app/event-details/event-details.component';
import { EventCreateComponent } from './events-app/event-create/event-create.component';
import { Error404Component } from './events-app/errors/error-404.component';
import { EventRouteActivatorService } from './events-app/event-details/event-route-activator.service';
import { EventsListResolverService } from './events-app/events/events-list-resolver.service';
import {LoginComponent, ProfileComponent} from './events-app/user';
import {SessionCreateComponent} from './events-app/session-create/session-create.component';

export const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventsListResolverService }
  },
  {
    path: 'events/create',
    component: EventCreateComponent,
    // canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events/edit/:id',
    component: EventCreateComponent
  },
  {
    path: 'events/session/new',
    component: SessionCreateComponent
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService]
  },
  // {
  //   path: 'user',
  //   loadChildren: './events-app/user/user.module#UserModule'
  // },
  {
    path: 'user/profile',
    component: ProfileComponent
  },
  {
    path: 'user/login',
    component: LoginComponent
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
];
