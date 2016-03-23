import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect']
  template: `
  <div class="kegItem"  *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)"
  [class.selected]="currentKeg === selectedKeg">
    <h3>{{ currentKeg.name }}</h3>
    <p>{{ currentKeg.brand }}</p>
    <p>{{ currentKeg.price }}</p>
    <p>{{ currentKeg.abv }}</p>
  </div>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
}
