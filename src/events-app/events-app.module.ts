import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {
  Error404Component,
  EventCreateComponent,
  EventDetailsComponent,
  EventsListResolverService,
  EventsListComponent,
  EventThumbnailComponent,
  EventRouteActivatorService,
  EventService,
  NavbarComponent,
  ToastrService,
} from './index';


import {appRoutes} from '../routes';
import {checkDirtyState} from './event-create/event-deactivator-service';
import {EventsAppComponent} from './events-app.component';


@NgModule({
  declarations: [
    Error404Component,
    EventsAppComponent,
    EventCreateComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventsListResolverService,
    EventRouteActivatorService,
    EventService,
    ToastrService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})

export class EventsAppModule { }


