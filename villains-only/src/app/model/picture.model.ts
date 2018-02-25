import { Post } from './post.model';
export class Picture{
    pictureId : number;
    post : Post;
    pictureUrl : string;

    constructor(pictureId : number, post: Post, pictureUrl : string){
        this.pictureId = pictureId;
        this.post = post;
        this.pictureUrl = pictureUrl;
    }
}