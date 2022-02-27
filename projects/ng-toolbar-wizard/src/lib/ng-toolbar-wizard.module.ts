import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WizardToolbarComponent } from './components/wizard-toolbar/wizard-toolbar.component';
import { NgToolbarWizardComponent } from './ng-toolbar-wizard.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NgToolbarWizardComponent,
    WizardToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NgToolbarWizardComponent
  ]
})
export class NgToolbarWizardModule { }
