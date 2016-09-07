"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var course_service_1 = require('./course.service');
var auto_grow_directive_1 = require('./auto-grow.directive');
var selectedItem_component_1 = require('./selectedItem.component');
// single brackets indicate a one-way binding from the control
// single square brackets indicate a one-way binding to the control
// both together indicate two-way binding.
var CoursesComponent = (function () {
    function CoursesComponent(courseService) {
        this.title = "This text box has events so it grows and shrinks";
        this.inputText = "";
        this.showDetail = false;
        this.selectedItem = "";
        this.list = courseService.getCourses();
    }
    CoursesComponent.prototype.onSelect = function () {
        this.showDetail = true;
    };
    CoursesComponent.prototype.onItemSelected = function (item) {
        this.selectedItem = item;
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'courses',
            template: "\n    <h2 (click)=\"onSelect()\">Click on me to show the list {{inputText}}</h2>\n    {{title}}\n    <input [(ngModel)]=\"inputText\" type=\"text\" autoGrow />\n    <ul *ngIf=\"showDetail === true\">\n      <li *ngFor=\"let thing of list\"\n      (click)=\"onItemSelected(thing)\">\n      Click me <font color=\"{{thing}}\">{{ thing }}</font>\n      </li>\n    </ul>\n    \n    <selectedItemComponent [item]=\"selectedItem\"></selectedItemComponent>\n    ",
            providers: [course_service_1.CourseService],
            directives: [auto_grow_directive_1.AutoGrowDirective, selectedItem_component_1.SelectedItemComponent]
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map