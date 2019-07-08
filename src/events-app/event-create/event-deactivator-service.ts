import {EventCreateComponent} from './event-create.component';

export function checkDirtyState(component: EventCreateComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really really want to cancel?');
  return true;
}
