import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {GameService} from './game.service';

@Component({
    selector: 'game',
    template: `<div *ngIf="game">
    
    <span>{{game.name}}</span><img class="icon" [src]="game.iconUrl" />
    <img class="screenshot" *ngFor="#screenshotUrl of game.screenshots" [src]="screenshotUrl" />
    
    </div>`,
    providers: [GameService],
    inputs: ['gameId'],
    styles: [`
        img.icon {
            width: 150px;
            height: 150px;
        }
        
        img.screenshot {
            height: 150px;
        }
    `]
})
export class GameComponent implements OnInit {

    constructor(private _gameService: GameService) {}
    
    gameId;    
    private game;

    ngOnInit() {
        this.getGame(this.gameId);
    }
    
    getGame(gameId) {
        this._gameService.getGame(gameId)
            .subscribe(game => this.game = game);
    }

}