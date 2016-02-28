import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

import {Game} from './game'


@Injectable()
export class GameService {
    constructor (private http: Http) {}
                
    getGame(gameId :string) {
        return this.http.get(`http://googleplay-jsapi.herokuapp.com/app/${gameId}`)
        .map(res => res.json())
        .map(gameData => new Game(gameData));
    }
}