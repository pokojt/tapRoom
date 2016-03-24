import {Component, EventEmitter} from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'refill-keg',
  inputs: ['keg'],
  template:`
    <button (click)="refillKeg(keg)" type="button" id="refillButton">Refill Keg</button>
  `
})
export class RefillKegComponent {
  public keg: Keg;
  refillKeg(keg: Keg): void {
    keg.pints = 124;
  }
}
