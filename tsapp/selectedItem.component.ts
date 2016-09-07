import {Component} from '@angular/core';

@Component({
    selector: 'selectedItemComponent',
    template: `
    <div *ngIf="item !== ''">
        <h2>Wow you clicked on '{{item}}' and that information was passed to this component</h2>
    </div>
    `,
    inputs: ["item"]
})

export class SelectedItemComponent {
    item = "";
}