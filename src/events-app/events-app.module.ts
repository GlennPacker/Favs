import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
  ProfileComponent,
  LoginComponent,
  TOASTR_TOKEN
} from './index';

import { appRoutes } from '../routes';
import { checkDirtyState } from './event-create/event-deactivator-service';
import { EventsAppComponent } from './events-app.component';
import {AuthService} from './shared/auth.service';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SessionCreateComponent} from './session-create/session-create.component';
import {SessionListComponent} from './session-list/session-list.component';
import {CollapsibleWellComponent} from './collapible-well/collapsible-well.component';
import {DurationPipe} from './shared/duration.pipe';
import {UpvoteComponent} from './upvote/upvote.component';
import {VoterService} from './shared/voter.service';
import {LocationValidator} from './event-create/location-validator.directive';
import {HttpClientModule} from '@angular/common/http';

declare let toastr: any

@NgModule({
  declarations: [
    Error404Component,
    EventsAppComponent,
    EventCreateComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    SessionListComponent,
    EventDetailsComponent,
    ProfileComponent,
    LoginComponent,
    SessionCreateComponent,
    CollapsibleWellComponent,
    DurationPipe,
    UpvoteComponent,
    LocationValidator,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EventsListResolverService,
    EventRouteActivatorService,
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    AuthService,
    VoterService
  ],
  bootstrap: [EventsAppComponent]
})
export class EventsAppModule {}
