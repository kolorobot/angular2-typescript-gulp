import {Component} from "angular2/core";
import {OnInit} from "angular2/core";

@Component({
    selector: "app",
    templateUrl: "./app/app.html"
})
export class AppComponent implements OnInit {

    ngOnInit() {
        console.log("Application component initialized ...");
    }
}