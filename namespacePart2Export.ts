/* export one more method */

import {nsStudent} from './namespaceExport'

export function studentTotalAndpercentage(student:nsStudent.IStudent):string
{
    return(`Total : ${student.english + student.maths + student.science} and Average :  ${(student.english + student.maths + student.science)/3} `);
}

