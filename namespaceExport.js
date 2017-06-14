"use strict";
exports.__esModule = true;
/* namespace file with interface and function */
var nsStudent;
(function (nsStudent) {
    function studentDetails(student) {
        return ("Name : " + student.name + " ( English : " + student.english + " , Maths : " + student.maths + " , Science : " + student.science + " )");
    }
    nsStudent.studentDetails = studentDetails;
})(nsStudent = exports.nsStudent || (exports.nsStudent = {}));
