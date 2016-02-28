import {Thread} from './thread';
import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class ThreadService {
    constructor (private http: Http) {}
    
    private searchUrl :string = "https://www.reddit.com/r/AndroidGaming/search.json?q=weekly+suggestion+requests&restrict_sr=on&sort=new&t=all";
    private threadNameMatcher = /Weekly Android Game Suggestion Requests/;
    
    getThreads() {
        return this.http.get(this.searchUrl)
        .map(res => res.json().data.children)
        .map(threads => {
            let threadArray :Array<Thread> = [];
            
            threads.forEach(thread => {
                if(this.threadNameMatcher.test(thread.data.title)) {
                    threadArray.push(
                        new Thread(thread.data.id, thread.data.title, thread.data.created)
                    )
                }
            });

            return threadArray;
        });
    }
}