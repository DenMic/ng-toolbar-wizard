import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'wizard',
    loadChildren: () => import('projects/test-lib/src/app/Page/wizard/wizard.module').then(m => m.WizardModule),
  },
  {
    path: '**',
    redirectTo: 'wizard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
