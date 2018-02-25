import { User } from './user.model';

export class Post{
    postId : number;
    contentsText : string;
    contentsPic : string
    userId : User

    constructor(postId: number, contentsText: string, contentsPic: string, userId: User){
        this.postId = postId;
        this.contentsText = contentsText;
        this.contentsPic = contentsText;
        this.userId = userId;
    }
}