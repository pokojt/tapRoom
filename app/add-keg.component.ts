import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: "new-keg",
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class='keg-form'>
      <h3>Add Keg:</h3>
      <input placeholder="Beer" #newName>
      <input placeholder="Brand" #newBrand>
      <input type="number" placeholder="Price" #newPrice>
      <input type="number" placeholder="ABV" #newABV>
      <button (click)="addKeg(newName, newBrand, newPrice, newABV)">Add</button>
    </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userBeer: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userABV: HTMLInputElement) {
    var newKeg = new Keg(userBeer.value, userBrand.value, parseInt(userPrice.value), parseFloat(userABV.value));
    this.onSubmitNewKeg.emit(newKeg);
    userBeer.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userABV.value = "";
  }
}
