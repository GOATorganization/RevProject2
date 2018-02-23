import { Comment } from './../models/comment.model';

export class Posts{
    id : number;
    userId : any;
    title : string;
    body : string;
    comments : Comment[];
    showHide = false;

    constructor(id: number, userId:any, title: string, body:string){
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.body = body;
    }

}