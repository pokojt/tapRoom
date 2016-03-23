import {Component, EventEmitter} from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
   selector: 'keg-display',
   inputs: ['keg'],
  template: `
  <div class="kegItem">
  <div class="beerInfo">
    <h3 [class.strong]="6.4 < keg.abv" [class.light]="6.5 > keg.abv" [class.session]="5 > keg.abv">{{ keg.name }}</h3>
    <p>{{ keg.brand }}</p>
    <p [class.expensive]="5 < keg.price" [class.cheap]="6 > keg.price">\$\{{ keg.price.toFixed(2) }}</p>
    <p>{{ keg.abv.toFixed(1) }}%</p>
    <p>{{ keg.pints }}  pints remaining</p>

  </div>
  <div class="pintBar">

    <div ng-repeat="n in fullnessArray" class="kegFullness">
      <div [class.poured]="124 > keg.pints"></div>
      <div [class.poured]="122 > keg.pints"></div>
      <div [class.poured]="120 > keg.pints"></div>
      <div [class.poured]="118 > keg.pints"></div>
      <div [class.poured]="116 > keg.pints"></div>
      <div [class.poured]="114 > keg.pints"></div>
      <div [class.poured]="112 > keg.pints"></div>
      <div [class.poured]="110 > keg.pints"></div>
      <div [class.poured]="108 > keg.pints"></div>
      <div [class.poured]="106 > keg.pints"></div>
      <div [class.poured]="104 > keg.pints"></div>
      <div [class.poured]="102 > keg.pints"></div>
      <div [class.poured]="100 > keg.pints"></div>
      <div [class.poured]="98 > keg.pints"></div>
      <div [class.poured]="96 > keg.pints"></div>
      <div [class.poured]="94 > keg.pints"></div>
      <div [class.poured]="92 > keg.pints"></div>
      <div [class.poured]="90 > keg.pints"></div>
      <div [class.poured]="88 > keg.pints"></div>
      <div [class.poured]="86 > keg.pints"></div>
      <div [class.poured]="84 > keg.pints"></div>
      <div [class.poured]="82 > keg.pints"></div>
      <div [class.poured]="80 > keg.pints"></div>
      <div [class.poured]="78 > keg.pints"></div>
      <div [class.poured]="76 > keg.pints"></div>
      <div [class.poured]="74 > keg.pints"></div>
      <div [class.poured]="72 > keg.pints"></div>
      <div [class.poured]="70 > keg.pints"></div>
      <div [class.poured]="68 > keg.pints"></div>
      <div [class.poured]="66 > keg.pints"></div>
      <div [class.poured]="64 > keg.pints"></div>
      <div [class.poured]="62 > keg.pints"></div>
      <div [class.poured]="60 > keg.pints"></div>
      <div [class.poured]="58 > keg.pints"></div>
      <div [class.poured]="56 > keg.pints"></div>
      <div [class.poured]="54 > keg.pints"></div>
      <div [class.poured]="52 > keg.pints"></div>
      <div [class.poured]="50 > keg.pints"></div>
      <div [class.poured]="48 > keg.pints"></div>
      <div [class.poured]="46 > keg.pints"></div>
      <div [class.poured]="44 > keg.pints"></div>
      <div [class.poured]="42 > keg.pints"></div>
      <div [class.poured]="40 > keg.pints"></div>
      <div [class.poured]="38 > keg.pints"></div>
      <div [class.poured]="36 > keg.pints"></div>
      <div [class.poured]="34 > keg.pints"></div>
      <div [class.poured]="32 > keg.pints"></div>
      <div [class.poured]="30 > keg.pints"></div>
      <div [class.poured]="28 > keg.pints"></div>
      <div [class.poured]="26 > keg.pints"></div>
      <div [class.poured]="24 > keg.pints"></div>
      <div [class.poured]="22 > keg.pints"></div>
      <div [class.poured]="20 > keg.pints"></div>
      <div [class.poured]="18 > keg.pints"></div>
      <div [class.poured]="16 > keg.pints"></div>
      <div [class.poured]="14 > keg.pints"></div>
      <div [class.poured]="12 > keg.pints"></div>
      <div [class.poured]="10 > keg.pints"></div>
      <div [class.poured]="8 > keg.pints"></div>
      <div [class.poured]="6 > keg.pints"></div>
      <div [class.poured]="4 > keg.pints"></div>
      <div [class.poured]="2 > keg.pints"></div>
    </div>
    <button (click)="pintPoured(keg)" type="button" id="pourButton">
      Pour a Pint
    </button>
    </div>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
  public onPintPour: EventEmitter<Keg>;
  pintPoured(keg: Keg): void {
    if (keg.pints > 0) {
      keg.pints -= 1;
    } else {
      alert("go home! you're drunk!");
    }
    console.log(keg.pints);
  }
}
