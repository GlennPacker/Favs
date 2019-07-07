import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import {EventThumbnailComponent} from './event-thumbnail/event-thumbnail.component';
import {NavbarComponent} from './nav/navbar.component';

import { EventService } from './shared/event.service';
import {ToastrService} from './shared/toastr.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [EventsAppComponent]
})
export class EventsAppModule { }
