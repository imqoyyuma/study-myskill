const prompt = require("prompt-sync")({ sigint: true });

var ulangi = prompt("Are you ready? "); //Input 1
console.log("Start");
var counter = 0;

while (ulangi) {
    var jawab = prompt("Apakah anda mau mengulang? (yes/no) : "); //Input 1 / yes atau 0 / no
    counter++;
    if (jawab == false || jawab == "no") {
        ulangi = false;
    }
    console.log("Perulangan ke-" + counter);
}
