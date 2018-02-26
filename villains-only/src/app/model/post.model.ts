import { Picture } from './picture.model';
import { User } from './user.model';

export class Post{
    postId : number;
    contentsText : string;
    contentsPic : Picture[];
    userId : User;

    showHide = false;

    constructor(postId: number, contentsText: string, contentsPic: Picture[], userId: User){
        this.postId = postId;
        this.contentsText = contentsText;
        this.contentsPic = contentsPic;
        this.userId = userId;
    }
}