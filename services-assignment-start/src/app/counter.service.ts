import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {
  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;

  toActive() {
    this.inactiveToActiveCount++;
  }
  toInactive() {
    this.activeToInactiveCount++;
  }
}
