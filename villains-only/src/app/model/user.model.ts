import { Post } from "./post.model";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    lairCity: string;
    lairCountry: string;
    profilePic: string;
    likes: Post[];

    constructor(id: number, firstName: string, lastName: string, email: string,
        password: string, lairCity: string, lairCountry: string, profilePic: string, likes: Post[]) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.lairCity = lairCity;
        this.lairCountry = lairCountry;
        this.profilePic = profilePic;
        this.likes = likes;
    }

}