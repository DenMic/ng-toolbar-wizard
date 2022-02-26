import { Component } from '@angular/core';
import { ISubPage } from 'dist/ng-toolbar-wizard/interface/sub-page';


@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements ISubPage {
  
  getValue() {
    return undefined;
  }

  *isValidForm(): IterableIterator<string> {
    if(false)  
      yield 'prova';
      
    if(false)
      yield 'msg';
  }

}
