import { Component } from '@angular/core';
import { StepPage } from 'dist/ng-toolbar-wizard/interface/step-page';
import { ValidateWizard } from 'dist/ng-toolbar-wizard/interface/validate-wizard';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  // animations: [
  //   slideInAnimation
  // ]
})
export class WizardComponent {
  advanceSearchStep: StepPage[] = [
    {
      step: 1,
      pagePath: 'wizard/first-step',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      nextStep: (val: any) => {
        console.log('first-step next');
      },
    },
    {
      step: 2,
      pagePath: 'wizard/second-step',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      nextStep: (val: any) => {
        console.log('second-step next');
      },
      prevStep: (val: any) => {
        console.log('prev-step next');
      }
    },
  ];

  constructor() { }

  cancelEvent(){
    console.log('cancel');
  }

  backEvent() {
    console.log('back');
  }

  validateEvent(validateWizard: ValidateWizard){
    if(validateWizard.error.length > 0 && validateWizard.idStep == 1)
      alert(validateWizard.error[0].keyError);
  }
}
