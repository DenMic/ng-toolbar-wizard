import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstStepComponent } from './child-page/first-step/first-step.component';
import { SecondStepComponent } from './child-page/second-step/second-step.component';
import { WizardComponent } from './wizard.component';

const routes: Routes = [
    {
        path: '',
        component: WizardComponent,
        runGuardsAndResolvers: 'always',
        children: [
            { path: '', redirectTo: 'first-step'},
            {
              path: 'first-step',
              component: FirstStepComponent
            },
            {
                path: 'second-step',
                component: SecondStepComponent
            },
          ],
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class WizardRoutingModule { }