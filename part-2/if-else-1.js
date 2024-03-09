const prompt = require("prompt-sync")({ sigint: true });

const password = prompt("Enter password: ");
//membandingkan
const validPassword = "password";

if (password === validPassword) {
    console.log("Selamat datang bos!");
} else {
    console.log("Password salah, coba lagi!");
}
console.log("Terima kasih sudah menggunakan aplikasi kami");
