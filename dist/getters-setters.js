"use strict";
class Person {
    // constructor(private firstName: string, private lastName: string) {}
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
        let parts = name.split(" ");
        if (parts.length != 2) {
            throw new Error("Invalid name format: first last");
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
let persons = new Person();
persons.fullName = 'John Doe';
console.log(persons.fullName);
//# sourceMappingURL=getters-setters.js.map