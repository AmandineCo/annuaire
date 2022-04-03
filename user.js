export class User {

    constructor(picture, firstName, lastName, age, streetNumber, streetName, postcode, city, email) {
        this.picture = picture;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.streetNumber = streetNumber;
        this.streetName = streetName;
        this.postcode = postcode;
        this.city = city;
        this.email = email;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get adressStreet() {
        return `${this.streetNumber} ${this.streetName}`;
    }

    get adressCity() {
        return `${this.postcode} ${this.city}`;
    }

}
