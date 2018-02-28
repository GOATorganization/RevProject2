export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    lairCity: string;
    lairCountry: string;
    profilePic: string;

    constructor(id: number, firstName: string, lastName: string, email: string,
        password: string, lairCity: string, lairCountry: string, profilePic: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.lairCity = lairCity;
        this.lairCountry = lairCountry;
        this.profilePic = profilePic;
    }

}