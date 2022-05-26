"use strict";
// objects and arrays
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "ADMIN";
    Roles[Roles["READ_ONLY"] = 1] = "READ_ONLY";
    Roles[Roles["AUTHOR"] = 2] = "AUTHOR";
})(Roles || (Roles = {}));
const person = {
    name: "Mainak",
    age: 25,
    hobbies: ["a", "b"],
    role: [2, "author"],
    role_enum: Roles.ADMIN,
};
console.log(person.name);
//# sourceMappingURL=object-array-enum.js.map