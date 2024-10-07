import { CustomerComponent } from './../common/customer/customer.component';
import { CanDeactivateFn } from '@angular/router';

export const authdGuard: CanDeactivateFn<CustomerComponent> = (component, currentRoute, currentState, nextState) => {
  return component.cannavigate();
};
