import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";

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