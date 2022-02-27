import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { StepPage } from '../interface/step-page';
import { ISubPage } from '../interface/sub-page';

@Component({
  selector: 'ng-toolbar-wizard',
  templateUrl: './ng-toolbar-wizard.component.html',
  styles: [
  ]
})
export class NgToolbarWizardComponent {
  @Input() advanceSearchStep: StepPage[];
  @Input() imgPath: string;
  @Input() title: string;

  @Input() textPrev = 'Previous';
  @Input() textNext = 'Next';
  @Input() confirmNext = 'Confirm';
  @Input() textCancel = 'Cancel';

  @Output() onNextStepEvent = new EventEmitter<number>();
  @Output() onPrevStepEvent = new EventEmitter<number>();
  @Output() onCompleteWizardEvent = new EventEmitter<number>();
  @Output() onBackEvent = new EventEmitter<boolean>();
  @Output() onCancelEvent = new EventEmitter<boolean>();

  @Output() onValidateEvent = new EventEmitter<string[]>();

  private outletComponent: ISubPage;
  public wizardStep = 1;

  constructor(private router: Router) { }

  // Toolbar Event
  backEvent() {
    this.onBackEvent.emit(true);
  }

  cancelEvent() {
    this.onCancelEvent.emit(true)
  }

  nextStep(step: number) {
    this.onNextStepEvent.emit(step);

    if(this.isFormValid()){
      this.wizardStep = this.wizardStep + 1;
      this.executeNextStep(step);

      this.goToWizardStep(this.wizardStep);
    }
  }

  prevStep(step: number) {
    this.onPrevStepEvent.emit(step);

    this.wizardStep = this.wizardStep - 1;
    this.goToWizardStep(this.wizardStep);
  }

  completeWizard(step: number) {
    this.onCompleteWizardEvent.emit(step);

    if(this.isFormValid()) {
      this.executeNextStep(step);
    }
  }

  // Child-Root-Event
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  onActivate(component: Component){
    this.outletComponent = <ISubPage>component;
  }

  // Private function
  private isFormValid(): boolean {
    let isValid = true;
    const error = Array.from(this.outletComponent.isValidForm());

    if(error.length > 0) {
      // const msg = error.reduce((prev, cur) => {
      //   return `${prev} ${cur}`;
      // });

      // TODO: notify Error
      // this.snackBar.open(msg, "Ok", { duration: 2500 });
      this.onValidateEvent.emit(error);
      isValid = false;
    }

    return isValid;
  }

  private executeNextStep(step: number): void {
    const val = this.outletComponent.getValue();
    const stepEvent = this.advanceSearchStep.find(x => x.step == step);
    if(stepEvent?.nextStep) stepEvent.nextStep(val);
  }

  private goToWizardStep(step: number) {
    const stepPath = this.advanceSearchStep.find(x => x.step == step);
    if(stepPath) this.router.navigate([stepPath.pagePath]);
  }
}
