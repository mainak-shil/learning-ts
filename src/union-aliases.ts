// union

type Combinable = number | string; // Type Alias/ custom types

function combine(num1: Combinable, num2: number | string) {
  let result;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

const combineAges = combine(20, 30);
console.log(combineAges);

const combineNames = combine("Mak", "Sam");
console.log(combineNames);
