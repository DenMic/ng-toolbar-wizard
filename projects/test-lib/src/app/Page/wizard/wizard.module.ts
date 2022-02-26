import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WizardRoutingModule } from './wizard.router.module';
import { WizardComponent } from './wizard.component';
import { FirstStepComponent } from './child-page/first-step/first-step.component';
import { SecondStepComponent } from './child-page/second-step/second-step.component';
import { NgToolbarWizardModule } from 'ng-toolbar-wizard';

@NgModule({
    imports: [
        WizardRoutingModule,
        CommonModule,
        ReactiveFormsModule,

        NgToolbarWizardModule
    ],
    declarations: [
        WizardComponent,
        FirstStepComponent,
        SecondStepComponent,
    ],
})
export class WizardModule { }
