// objects and arrays
enum Roles {
  ADMIN = "ADMIN",
  READ_ONLY = 1,
  AUTHOR = 2,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  role_enum: Roles;
} = {
  name: "Mainak",
  age: 25,
  hobbies: ["a", "b"],
  role: [2, "author"],
  role_enum: Roles.ADMIN,
};

console.log(person.name);
