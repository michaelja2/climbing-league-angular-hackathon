import {Component} from '@angular/core';
import { LeagueDataService } from './league-data.service';

@Component({
    selector: 'http-test',
    template: `
           <button (click)="onTestGet()">Test GET request</button>
           <p>Output: {{getData}} </p>
           <button (click)="onTestPost()">Test POST request</button>
           <p>Output: {{postData}} </p>           
    `,
    providers: [LeagueDataService]
})

export class HttpTestComponent {
    getData: string;
    postData: string;
    
    constructor (private _httpService: LeagueDataService) {
        
    }
    
    onTestGet() {
        this._httpService.getCurrentTime()
        .subscribe(
            data => this.getData = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
        );        
    }
    
    onTestPost() {
        this._httpService.postJSON()
        .subscribe(
            data => this.postData = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
        );        
    }
}