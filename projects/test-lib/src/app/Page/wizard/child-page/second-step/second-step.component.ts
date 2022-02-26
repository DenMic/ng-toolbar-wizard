import { Component } from '@angular/core';
import { ISubPage } from 'dist/ng-toolbar-wizard/interface/sub-page';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements ISubPage {

  getValue() {
    return undefined;
  }

  *isValidForm(): IterableIterator<string> {
    if(false)
      yield 'msg';
      
    if(false)
      yield 'msg';
  }

}
