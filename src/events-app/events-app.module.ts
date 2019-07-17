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
  ToastrService,
  ProfileComponent,
  LoginComponent
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
    CollapsibleWellComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    EventsListResolverService,
    EventRouteActivatorService,
    EventService,
    ToastrService,
    AuthService,
  ],
  bootstrap: [EventsAppComponent]
})
export class EventsAppModule {}
