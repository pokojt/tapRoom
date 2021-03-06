import { Component, EventEmitter} from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="header">
      <h1>Tap That App</h1>
    </div>
    <div class="container">
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Blonde IPA", "Pfriem Family Brewers", 6, 7.5),
      new Keg("Local Logger Lager", "Everybody's Brewing", 5, 5.0),
      new Keg("Dead Guy Ale", "Rogue", 5, 6.8),
      new Keg("Ripe", "Great Notion Brewing", 6, 7.2),
      new Keg("PBR", "Pabst Brewing Company", 2, 4.5)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log("parent");
  }
}
