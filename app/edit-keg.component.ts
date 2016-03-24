import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'edit-keg',
  inputs: ['keg'],
  outputs: [],
  template: `
  <div class="edit-form">
    <h2>Edit Keg:</h2>
    <label for="name">Beer</label>
    <input [(ngModel)]="keg.name" />
    <label for="brand">Brand</label>
    <input [(ngModel)]="keg.brand" />
    <label for="price">Price/Pint</label>
    <input type="number" [(ngModel)]="keg.price" />
    <label for="abv">ABV</label>
    <input type="number" [(ngModel)]="keg.abv" />
    <button (onSubmitKegEdit)="submitEdit($event)" type="button" id="editButton">Submit Edit</button>
  </div>
  `
})
export class EditKegComponent {
  public kegToEdit: Keg;
  public notKeg: Keg;
  public keg: Keg;
  public onSubmitKegEdit: EventEmitter<Keg>;
  constructor() {
    this.onSubmitKegEdit = new EventEmitter();
  }
  submitEdit() {
    this.keg = this.notKeg;
  }
}
