import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WizardToolbarComponent } from './components/wizard-toolbar/wizard-toolbar.component';
import { NgToolbarWizardComponent } from './ng-toolbar-wizard.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    NgToolbarWizardComponent,
    WizardToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [
    NgToolbarWizardComponent
  ]
})
export class NgToolbarWizardModule { }
