export class Post {
    id: string;
    gameId: string;
    
    constructor(private _id, private _gameId){
        this.id = _id;
        this.gameId = _gameId;
    }
}