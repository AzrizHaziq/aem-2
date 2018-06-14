import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'template',
        pathMatch: 'full',
    },
    {
        path: 'template',
        component: TemplateComponent
    },
    {
        path: 'reactive',
        component: ReactiveComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class FormRouting {
}
