import {Component} from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
   selector: 'keg-display',
   inputs: ['keg'],
  template: `
  <div class="kegItem">
    <h3>{{ keg.name }}</h3>
    <p>{{ keg.brand }}</p>
    <p>{{ keg.price }}</p>
    <p>{{ keg.abv }}</p>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
}
