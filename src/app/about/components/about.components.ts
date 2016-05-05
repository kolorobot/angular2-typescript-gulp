import {Component} from "@angular/core";
import {OnInit} from "@angular/core";

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