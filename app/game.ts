export class Game {
    name: string;
    iconUrl: string;
    screenshots: string[];
    
    constructor(private _data){
        this.name = _data.name;
        this.iconUrl = _data.icon.replace('=w300', '=w150');
        
        this.screenshots = _data.screenshotUrls.map(url => url.replace('=h900', '=h150'));;
    }
}