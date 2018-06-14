import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-reactive',
    templateUrl: 'reactive.component.html',
})
export class ReactiveComponent implements OnInit {

    public formRegister: FormGroup;

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


    removeItem = (index: number): void => {
        const formArray = this.formRegister.get('skills') as FormArray;
        formArray.removeAt(index);
    }

    addNewItem = (val: string): void => {
        const formArray = this.formRegister.get('skills') as FormArray;
        formArray.push(new FormControl(val));
    }

}
