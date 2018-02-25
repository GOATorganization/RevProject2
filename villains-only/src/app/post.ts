import { DatePipe } from '@angular/common';

export class Post {

    post_id: number;
    user_id: number;
    contents_txt: string;
    contents_pic: string;
    like_list: number;
    post_date: string;

}

export const postList: Post[] = [
    {post_id: 1, user_id: 2, contents_txt: 'Just killed a hero lol',
                             contents_pic: '\:empty:', like_list: 425 , post_date: '1999-02-02' },
    {post_id: 2, user_id: 3, contents_txt: 'Making new world dom plans, wish me luck',
                             contents_pic: '\:empty:', like_list: 756, post_date: '1999-02-02' },
    {post_id: 3, user_id: 2, contents_txt: 'WTF, MY HERO NEMISIS DROPED ME!?',
                             contents_pic: '\:empty:', like_list: 215, post_date: '1999-02-02' },
    {post_id: 4, user_id: 4, contents_txt: 'Going on a rampage @4, NE1 wanna come w/?',
                             contents_pic: '\:peaceful city:', like_list: 147, post_date: '1999-02-02' },
    {post_id: 5, user_id: 7, contents_txt: 'How many henchmen does it take to let a hero escape?\n How many wanna die?',
                             contents_pic: 'henchman_bodies:', like_list: 278, post_date: '1999-02-02'},
];
