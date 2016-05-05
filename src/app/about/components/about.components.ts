import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";

declare var $:any;

@Component({
    templateUrl: './app/about/components/about.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AboutComponent implements OnInit {
    ngOnInit() {
        $.material.init();
    }
}