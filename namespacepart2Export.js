"use strict";
/* one more method in existing namespace */
exports.__esModule = true;
function studentTotalAndpercentage(student) {
    return ("Total : " + (student.english + student.maths + student.science) + " and Average :  " + (student.english + student.maths + student.science) / 3 + " ");
}
exports.studentTotalAndpercentage = studentTotalAndpercentage;
