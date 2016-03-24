import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'delete-keg',
  inputs: ['keg'],
  outputs: ['onSubmitKegDelete'],
  template: `
  <div class="delete">
    <button
      (click)="submitDelete(keg)" type="button" id="deleteButton">
      <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
    </button>
  </div>
  `
})
export class DeleteKegComponent {
  public keg: Keg;
  public onSubmitKegDelete: EventEmitter<Keg>
  constructor() {
    this.onSubmitKegDelete = new EventEmitter();
  }
  submitDelete(keg) {
    this.onSubmitKegDelete.emit(keg);
  }
}
