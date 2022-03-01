import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISubPage } from 'dist/ng-toolbar-wizard/interface/sub-page';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements ISubPage {
  secondStepClass = {
    address: undefined,
    mobile: undefined
  }

  testForm: FormGroup = new FormGroup({
    address: new FormControl(this.secondStepClass.address, [
      Validators.required,
      Validators.minLength(4)
    ]),
    mobile: new FormControl(this.secondStepClass.mobile, [
      Validators.required
    ])
  });

  getValue() {
    return undefined;
  }

  *isValidForm(): IterableIterator<any> {
    const setError: any[] = [];
    this.testForm.markAllAsTouched();

    Object.keys(this.testForm.controls).forEach(key => {
        const controlErrors = this.testForm.controls[key].errors;

        if (controlErrors) {
          Object.keys(controlErrors).forEach(keyError => {
            setError.push({ control: key, keyError: keyError });
          });
        }
    });

    for (let index = 0; index < setError.length; index++) {
      yield setError[index];
    }
  }
}
