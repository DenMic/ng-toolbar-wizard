import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISubPage } from 'dist/ng-toolbar-wizard/interface/sub-page';
import { FirstStepClass } from 'projects/test-lib/src/app/Class/first-step-class';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements ISubPage {
  firstStepClass = {
    firstName: "Mark",
    lastName: "What",
    age: 22
  } as FirstStepClass;

  testForm: FormGroup = new FormGroup({
    name: new FormControl(this.firstStepClass.firstName, [
      Validators.required,
      Validators.minLength(4)
    ]),
    lastName: new FormControl(this.firstStepClass.lastName, [
      Validators.required
    ]),
    age: new FormControl(this.firstStepClass.age)
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
