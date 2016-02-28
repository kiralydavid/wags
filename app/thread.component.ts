import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {PostService} from './post.service';
import {GameComponent} from './game.component';

@Component({
    selector: 'thread',
    template: `<div *ngIf="posts"><h3>{{thread.title}} - {{posts.length}} games</h3><ul><li *ngFor="#post of posts"><game [gameId]="post.gameId"></game></li></ul></div>`,
    providers: [PostService],
    inputs: ['thread'],
    directives: [GameComponent]
})
export class ThreadComponent implements OnInit {

    constructor(private _postService: PostService) {}
    
    thread;    
    private posts;

    ngOnInit() {
        this.getPosts(this.thread.id);
    }
    
    getPosts(threadId) {
        this._postService.getPosts(threadId)
            .subscribe(posts => this.posts = posts);
    }

}