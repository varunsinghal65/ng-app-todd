import {Component} from '@angular/core';

@Component({
    selector: 'app-not-found',
    template : `<div>
    No routes found
    <!-- Router link is a ng provided directive that allows you to perform in-app navigation via ng router -->
    <a routerLink = '/'>Go to home</a>
    </div>
    `
})
export class NotFoundComponent {}