import { Component } from '@angular/core';

@Component({
  templateUrl: './events-list.component.html',
  selector: 'app-events-list'
})

export class EventsListComponent {
  events = [{
    name: 'Weekend',
    date: '06/07/2019',
    time: '09:00 am',
    price: 10.00,
    address: {
      address1: '22 The Martletts',
      city: 'Brighton',
      postcode: 'bn27 4FA',
    },
  }];

  handleEventClicked = (data) => {
    console.log('user clicked event:', data);
  }
}
