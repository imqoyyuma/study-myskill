const prompt = require("prompt-sync")({ sigint: true });
const nilai = prompt("Masukkan nilai: ");
var grade;

switch (true) {
    case nilai > 90:
        grade = "A";
        break;
    case nilai > 80:
        grade = "B+";
        break;
    case nilai > 70:
        grade = "B";
        break;
    case nilai > 50:
        grade = "C";
        break;
    default:
        grade = "F";
}

console.log("Grade adalah = " + grade);
