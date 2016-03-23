import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="kegItem">
    <h2>Edit Keg:</h2>
    <h3>{{ keg.name }}</h3>
    <p>{{ keg.brand }}</p>
    <p>{{ keg.price }}</p>
    <p>{{ keg.abv }}</p>
  </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
