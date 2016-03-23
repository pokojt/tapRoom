import { Component} from 'angular2/core';
// import { TaskListComponent } from './task-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Tap Room App</h1>
      <div class="kegItem"  *ngFor="#keg of kegs">
        <h3>{{ keg.name }}</h3>
        <p>{{ keg.brand }}</p>
        <p>{{ keg.price }}</p>
        <p>{{ keg.abv }}</p>
      </div>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Blonde IPA", "Pfriem Family Brewers", 6, 7.5),
      new Keg("Dead Guy Ale", "Rogue", 5, 6.8),
      new Keg("Ripe", "Great Notion Brewing", 6, 7.2),
      new Keg("PBR", "Pabst Brewing Company", 2, 4.5)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log("parent", clickedKeg);
  }
}
