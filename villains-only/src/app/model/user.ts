export class User {
    profilePic: string;
    firstName: string;
    lastName: string;
    email: string;
    lair: string;

    constructor(profilePic: string, firstName: string, lastName: string, email: string, lair: string) {
        this.profilePic = profilePic;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.lair = lair;
    }
}
