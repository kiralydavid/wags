export class Thread {
    id: string;
    title: string;
    created: number;
    
    constructor(private _id, private _title, private _created){
        this.id = _id;
        this.title = _title;
        this.created = _created;
    }
}