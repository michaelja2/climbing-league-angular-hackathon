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
var EditTeamComponent = (function () {
    function EditTeamComponent() {
    }
    EditTeamComponent = __decorate([
        core_1.Component({
            selector: 'editTeamComponent',
            template: "\n    <div *ngIf=\"currentTeam != undefined\">\n        <h2>Wow you clicked on '{{currentTeam.name}}' and that information was passed to this component</h2>\n    </div>\n    ",
            inputs: ["currentTeam"]
        }), 
        __metadata('design:paramtypes', [])
    ], EditTeamComponent);
    return EditTeamComponent;
}());
exports.EditTeamComponent = EditTeamComponent;
//# sourceMappingURL=editTeam.component.js.map