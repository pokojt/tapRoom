import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="kegItem">
    <h2>Edit Keg:</h2>
    <label for="name">Beer</label>
    <input [(ngModel)]="keg.name" />
    <label for="brand">Brand</label>
    <input [(ngModel)]="keg.brand" />
    <label for="price">Price/Pint</label>
    <input type="number" [(ngModel)]="keg.price" />
    <label for="abv">ABV</label>
    <input type="number" [(ngModel)]="keg.abv" />
  </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
