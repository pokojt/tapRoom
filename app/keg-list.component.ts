import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';
import { KegComponent } from './keg.component';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent} from './add-keg.component';
import {ChangePipe} from './change.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList', 'kegToDelete'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  pipes: [ChangePipe],
  template: `
  <select (change)="onChange($event.target.value)">
    <option selected="selected" value="all">Show All</option>
    <option value="change">Show Kegs Ready to Be Changed</option>
    <option value="stillFull" selected="selected">Show Full Kegs</option>
  </select>
  <keg-display  *ngFor="#currentKeg of kegList | change:filterEmpty" (click)="kegClicked(currentKeg)"
  [class.selected]="currentKeg === selectedKeg"
  [keg]="currentKeg" (onKegDelete)="deleteKeg($event)">
  </keg-display>
  <edit-keg-details *ngIf="!kegToDelete && selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)">
  </new-keg>
  `
})
export class KegListComponent {
  public kegToDelete: Keg;
  public kegList: Keg[];
  public deleteIndex: number;
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterEmpty: string = "all";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(newKeg: Keg) {
    this.kegList.push(newKeg);
  }
  onChange(filterOption) {
    this.filterEmpty = filterOption;
  }
  deleteKeg(kegToDelete: Keg) {
    this.selectedKeg = this.kegToDelete;
    this.deleteIndex =  this.kegList.indexOf(kegToDelete);
    this.kegList.splice(this.deleteIndex, 1);
  }
}
