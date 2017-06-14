"use strict";
exports.__esModule = true;
/* use import concept */
var namespaceExport_1 = require("./namespaceExport");
var namespacepart2Export_1 = require("./namespacepart2Export");
/* usage of namespace */
var objStudent = { name: "Sudesh", english: 75, maths: 80, science: 60 };
console.log(namespaceExport_1.nsStudent.studentDetails(objStudent));
console.log(namespacepart2Export_1.studentTotalAndpercentage(objStudent));
function studentDetails() {
    document.getElementById("lblMessage").innerHTML = namespaceExport_1.nsStudent.studentDetails(objStudent);
    document.getElementById("lblMessage1").innerHTML = namespacepart2Export_1.studentTotalAndpercentage(objStudent);
}
