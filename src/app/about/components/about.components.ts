import {Component, OnInit} from "angular2/core";

declare var $:any;

@Component({
    templateUrl: './app/about/components/about.html'
})
export class AboutComponent implements OnInit {
    ngOnInit() {
        $.material.init();
    }
}