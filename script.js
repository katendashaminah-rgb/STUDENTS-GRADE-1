const studentName = "Shaminah";
const marks = 70;
function calculateGrade(studentname, score) {

    if (score >= 80) {
        return studentname + " got Grade A";
    }
    else if (score >= 70) {
        return studentname + " got Grade B";
    }
    else if (score >= 60) {
        return studentname + " got Grade C";
    }
    else if (score >= 50) {
        return studentname + " got Grade D";
    }
    else {
        return studentname + " has failed";
    }
}
const result = calculateGrade(studentName, marks);
console.log("Hello Shaminah ");
document.write("Hello Shaminah ")
console.log(studentName);
document.write("Hello Shaminah ");
console.log(70 );
document.write("Hello Shaminah ");
console.log(result);