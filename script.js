const studentName = "Shaminah";
const marks = 60;
function calculateGrade(name, score) {

    if (score >= 80) {
        return name + " got Grade A";
    }
    else if (score >= 70) {
        return name + " got Grade B";
    }
    else if (score >= 60) {
        return name + " got Grade C";
    }
    else if (score >= 50) {
        return name + " got Grade D";
    }
    else {
        return name + " has failed";
    }
}
const result = calculateGrade(studentName, marks);
console.log("Hello Shaminah ");
console.log(studentName);
console.log(60 );
console.log(result);