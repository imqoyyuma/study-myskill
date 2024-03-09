const prompt = require("prompt-sync")({ sigint: true });

var num1 = prompt("Enter a first number: ");
var num2 = prompt("Enter a second number: ");

var hasil1 = Number(num1) + Number(num2);
var hasil2 = num1 + num2;

console.log("first number + second number = ");
console.log(hasil1);
console.log(hasil2);

//hasil akhir menggunakan Number() karena inputan dari prompt itu bentuk 'string'
