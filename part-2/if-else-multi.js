const prompt = require("prompt-sync")({ sigint: true });

const nilai = prompt("Masukkan nilai: ");
var grade;

if (nilai > 90) {
    grade = "A";
} else if (nilai > 80) {
    grade = "B+";
} else if (nilai > 70) {
    grade = "B";
} else if (nilai > 50) {
    grade = "C";
} else {
    grade = "E";
}

console.log(grade);
