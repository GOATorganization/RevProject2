import { Picture } from './picture.model';
import { User } from './user.model';

export class Post {
    postId: number;
    contentsText: string;
    contentsPic: Picture[];
    userId: User;
    likers: User[];
    currDate: Date;

    showHide = false;
    likedPost = false;

    constructor(postId: number, contentsText: string, contentsPic: Picture[], userId: User, currDate: Date, likers: User[]) {
        this.postId = postId;
        this.contentsText = contentsText;
        this.contentsPic = contentsPic;
        this.userId = userId;
        this.likers = likers;
        this.currDate = currDate;
    }
}
