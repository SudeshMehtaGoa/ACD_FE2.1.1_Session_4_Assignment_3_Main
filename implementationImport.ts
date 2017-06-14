/* use import concept */
import {nsStudent} from './namespaceExport'
import {studentTotalAndpercentage} from './namespacepart2Export'

/* usage of namespace */
let objStudent: nsStudent.IStudent = { name: "Sudesh", english: 75, maths: 80, science: 60 };
console.log(nsStudent.studentDetails(objStudent));
console.log(studentTotalAndpercentage(objStudent));

function studentDetails() {
    (<HTMLInputElement>document.getElementById("lblMessage")).innerHTML = nsStudent.studentDetails(objStudent);
    (<HTMLInputElement>document.getElementById("lblMessage1")).innerHTML = studentTotalAndpercentage(objStudent);

}


