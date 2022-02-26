import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-wizard-toolbar',
  templateUrl: './wizard-toolbar.component.html',
  styleUrls: ['./wizard-toolbar.component.scss']
})
export class WizardToolbarComponent {
  @Input() totalStep = 1;
  @Input() step = 1;
  @Input() title: string;
  @Input() imgPath: string;

  @Input() textPrev: string;
  @Input() textNext: string;
  @Input() confirmNext: string;
  @Input() textCancel: string;

  @Output() onNextStepEvent = new EventEmitter<number>();
  @Output() onPrevStepEvent = new EventEmitter<number>();
  @Output() onBackEvent = new EventEmitter<boolean>();
  @Output() onCancelEvent = new EventEmitter<boolean>();
  @Output() onCompleteWizardEvent = new EventEmitter<number>();

  constructor() { }

  getTitleToolbar() {
    if (this.title)
      return `${this.title} - ${this.step} / ${this.totalStep}`;

    return `${this.step} / ${this.totalStep}`
  }

  getPrevText(): string {
      return this.textPrev || 'Previous';
  }

  getNextText(): string {
    if(this.totalStep == this.step)
      return this.confirmNext || 'Confirm';

    return this.textNext || 'Next';
  }

  getCancelText(): string {
    return this.textCancel || 'Cancel';
  }

  nextStep() {
    if(this.totalStep == this.step){
      this.onCompleteWizardEvent.emit(this.step);
      return;
    }

    this.onNextStepEvent.emit(this.step);
  }

  prevStep() {
    this.onPrevStepEvent.emit(this.step);
  }

  cancelWizard() {
    this.onCancelEvent.emit(true);
  }

  back() {
    this.onBackEvent.emit(true);
  }
}
