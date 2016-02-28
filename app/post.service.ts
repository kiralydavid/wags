import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

import {Post} from './post'


@Injectable()
export class PostService {
    constructor (private http: Http) {}
        
    private gameLinkMatcher = /\/\/play\.google\.com\/store\/apps\/details\?id=([a-zA-Z0-9\.]*)\)/g;
        
    getPostsWithin(posts, postArray) {
        
        posts.forEach(post => {
            if(post.data.replies) {
                this.getPostsWithin(post.data.replies.data.children, postArray);
            } 
            
            let matched;
            
            while(matched = this.gameLinkMatcher.exec(post.data.body)){
                postArray.push(new Post(post.data.id, matched[1]));  
            }
        })
    }
        
    getPosts(threadId :string) {
        return this.http.get(`https://www.reddit.com/comments/${threadId}.json`)
        .map(res => res.json()[1].data.children)
        .map(posts => {
            let postArray :Array<Post> = [];
            
            this.getPostsWithin(posts, postArray);

            return postArray;
        });
    }
}