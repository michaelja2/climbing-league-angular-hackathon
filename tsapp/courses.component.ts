import {Component} from '@angular/core';
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
import {SelectedItemComponent} from './selectedItem.component';

// single brackets indicate a one-way binding from the control
// single square brackets indicate a one-way binding to the control
// both together indicate two-way binding.
@Component({
    selector: 'courses',
    template: `
    <h2 (click)="onSelect()">Click on me to show the list {{inputText}}</h2>
    {{title}}
    <input [(ngModel)]="inputText" type="text" autoGrow />
    <ul *ngIf="showDetail === true">
      <li *ngFor="let thing of list"
      (click)="onItemSelected(thing)">
      Click me <font color="{{thing}}">{{ thing }}</font>
      </li>
    </ul>
    
    <selectedItemComponent [item]="selectedItem"></selectedItemComponent>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective, SelectedItemComponent]
})

export class CoursesComponent {
    title = "This text box has events so it grows and shrinks";
    inputText = "";
    showDetail = false;
    list: string[];
    selectedItem = "";
    
    constructor(courseService: CourseService) {
        this.list = courseService.getCourses();
    }
    
    onSelect() {
        this.showDetail = true;
    }
    
    onItemSelected(item) {
        this.selectedItem = item;
    }
}