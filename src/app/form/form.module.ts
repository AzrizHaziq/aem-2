import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsComponent } from '../shared/tags/tags.component';

import { FormRouting } from './form.routing';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
    imports: [
        FormRouting,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        TagsComponent,
        ReactiveComponent,
        TemplateComponent,
    ]
})
export class FormModule {
}
