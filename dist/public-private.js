"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Department2_employees;
class Department2 {
    // (or) private employees: string[] = [];
    constructor(n) {
        _Department2_employees.set(this, []);
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        // validation etc
        __classPrivateFieldGet(this, _Department2_employees, "f").push(employee);
    }
    printEmployeeInformation() {
        console.log(__classPrivateFieldGet(this, _Department2_employees, "f").length);
        console.log(__classPrivateFieldGet(this, _Department2_employees, "f"));
    }
}
_Department2_employees = new WeakMap();
const accounting2 = new Department2("Accounting");
accounting2.addEmployee("Max");
accounting2.addEmployee("Manu");
// NOT ACCESSIBLE
//accounting2.#employees[2] = "Anna";
accounting2.describe();
accounting2.name = "NEW NAME";
accounting2.printEmployeeInformation();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
class Department_Shorthand {
    constructor(name) {
        this.name = name;
        this.name = 'Mainak';
    }
}
class Department_ReadOnly {
    constructor(name) {
        this.name = name;
        this.name = 'Mainak';
    }
}
//# sourceMappingURL=public-private.js.map