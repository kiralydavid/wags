import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {ThreadService} from './thread.service';
import {Thread} from './thread';
import {ThreadComponent} from './thread.component';

@Component({
    selector: 'my-app',
    template: `<div *ngIf="threads"><h1>Hello World</h1><thread *ngFor="#thread of threads | slice:0:1" [thread]="thread"></thread></div>`,
    providers: [
        HTTP_PROVIDERS,
        ThreadService,
    ],
    directives: [ThreadComponent]
})
export class AppComponent implements OnInit {

    constructor(private _threadService: ThreadService) {}
    
    private threads;

    ngOnInit() {
        this.getThreads();
    }
    
    getThreads() {
        this._threadService.getThreads()
            .subscribe(threads => this.threads = threads);
    }

}