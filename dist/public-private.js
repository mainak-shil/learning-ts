"use strict";
class Department2 {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        // validation etc
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting2 = new Department2("Accounting");
accounting2.addEmployee("Max");
accounting2.addEmployee("Manu");
// accounting2.employees[2] = 'Anna';
accounting2.describe();
accounting2.name = "NEW NAME";
accounting2.printEmployeeInformation();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
//# sourceMappingURL=public-private.js.map