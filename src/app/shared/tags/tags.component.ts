import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-tags',
    templateUrl: 'tags.component.html',
    styleUrls: [ 'tags.component.scss' ]
})
export class TagsComponent {

    state = { newItem: '' };
    meta = { isFocused: false, };

    @Input() items: string[] = [];
    @Output() addItem: EventEmitter<string> = new EventEmitter();
    @Output() removeItem: EventEmitter<number> = new EventEmitter();
    onFocus = () => this.meta.isFocused = true;
    onFocusOut = () => this.meta.isFocused = false;

    onEnter() {
        if (this.state.newItem === '') {
            return;
        }
        this.addItem.emit(this.state.newItem);
        this.state.newItem = '';
    }
}
