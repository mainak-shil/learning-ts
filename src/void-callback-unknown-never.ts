// void
function add10(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("result " + num);
}

printResult(add10(4, 3));

let combineValues: (a: number, b: number) => number;

combineValues = add10;
console.log(combineValues(8, 7));

// callback
function addNHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addNHandle(10, 20, (result) => {
  console.log(result);
});

// unknown
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Mak";

if (typeof userInput === "string") {
  // extra safe side check is needed
  userName = userInput;
}

// never
function generateError(msg: string, code: number): never {
  throw { message: msg, errorCode: code };
}

generateError("An error occurred", 500);
