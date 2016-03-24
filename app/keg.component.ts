import {Component, EventEmitter} from 'angular2/core';
import { Keg } from './keg.model';
import { RefillKegComponent} from './refill-keg.component';
import { EditKegComponent} from './edit-keg.component';
import { DeleteKegComponent} from './delete-keg.component';
import { KegVisualComponent} from './keg-visual.component';

@Component ({
   selector: 'keg-display',
   inputs: ['keg'],
   outputs: ['onKegDelete'],
   directives: [RefillKegComponent, EditKegComponent, DeleteKegComponent, KegVisualComponent],
  template: `
  <div class="kegItem">
    <div class="beerLeft">
      <div class="beerContent">

        <div *ngIf="keg !== kegToEdit"  class="beerInfo"  [class.strong]="6.4 < keg.abv" [class.light]="6.5 > keg.abv" [class.session]="5 > keg.abv">
          <div class="beerText">
            <h2>{{ keg.name }} - <span [class.expensive]="5 < keg.price" [class.cheap]="6 > keg.price">\$\{{ keg.price.toFixed(2) }}</span></h2>
            <p>{{ keg.brand }}</p>
            <p>{{ keg.abv.toFixed(1) }}%</p>
            <p>{{ keg.pints }}  pints remaining</p>
          </div>
        </div>
        <edit-keg
          [keg]="keg" *ngIf="kegToEdit" (onSubmitKegEdit)="submitEdit($event)">
        </edit-keg>
      </div>

      <div class="beerButtons">
        <button (click)="editKeg(keg)" type="button" id="editButton">Edit this Beer</button>
        <refill-keg *ngIf="keg.pints < 10" [keg]="keg"></refill-keg>
        <delete-keg
          [keg]="keg"
          (onSubmitKegDelete)="sendKeg($event)">
        </delete-keg>
      </div>
    </div>

    <div class="pintsBar">
      <keg-visual
        [keg]="keg">
      </keg-visual>
      <button (click)="pintPoured(keg)" type="button" id="pourButton">
      Pour a Pint
      </button>
    </div>
  </div>
  `
})
export class KegComponent {
  public kegToEdit: Keg;
  public notKeg: Keg;
  public keg: Keg;
  public onKegDelete: EventEmitter<Keg>;
  constructor() {
    this.onKegDelete = new EventEmitter();
  }
  pintPoured(keg: Keg): void {
    if (keg.pints > 0) {
      keg.pints -= 1;
    } else {
      alert("go home! you're drunk!");
    }
    console.log(keg.pints);
  }
  sendKeg(kegToDelete: Keg): void {
    this.onKegDelete.emit(kegToDelete);
  }
  editKeg(keg: Keg) {
    this.kegToEdit = keg;
  }
  submitEdit(boolean) {
    this.kegToEdit = this.notKeg;
  }
}
