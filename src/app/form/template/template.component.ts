import { Component } from '@angular/core';

@Component({
    selector: 'app-template',
    templateUrl: 'template.component.html',
})
export class TemplateComponent {

    state = {
        name: {
            first: '',
            last: ''
        },
        email: '',
        phone: {
            mobile: ''
        },
        skills: [
            'skill1',
            'skill2',
        ]
    };

    addNewItem = (val: string) => this.state.skills = [
        ...this.state.skills,
        val,
    ];

    removeItem = (index: number) => this.state.skills =
        this.state.skills.filter((_, i) => i !== index);
}
