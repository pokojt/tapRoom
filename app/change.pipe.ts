import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "change",
  pure: false
})
export class ChangePipe implements PipeTransform {
  transform(input: Keg[], args) {
    var fullness = args[0];
    if ( fullness === "change" ) {
      return input.filter(function(keg) {
        return keg.pints < 11;
      });
    } else if (fullness === "stillFull") {
      return input.filter(function(keg) {
        return keg.pints > 10;
      });
    } else {
      return input;
    }
  }
}
