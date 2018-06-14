import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-reactive',
    templateUrl: 'reactive.component.html',
})
export class ReactiveComponent implements OnInit {

    public formRegister: FormGroup;
    removeItem = (index: number): void => this.formRegister.get('skills').removeAt(index);
    addNewItem = (val: string): void => this.formRegister.get('skills').push(new FormControl(val));

    constructor(
        private formBuilder: FormBuilder
    ) {
    }

    ngOnInit() {
        this.formRegister = this.formBuilder.group({
            name: this.formBuilder.group({
                first: '',
                last: ''
            }),
            email: '',
            phone: this.formBuilder.group({
                mobile: ''
            }),
            skills: this.formBuilder.array([ 'skill 1', 'skill 2' ])
        });
    }
}
