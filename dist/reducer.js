"use strict";
const addReducer = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = addReducer(5, 10, 2, 3.7);
console.log(addedNumbers);
//# sourceMappingURL=reducer.js.map