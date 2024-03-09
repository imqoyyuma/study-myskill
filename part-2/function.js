//fungsi sayHello, setelah buat fungsi, panggil kembali fungsi tsb untuk dimunculkan

function sayHello() {
    console.log("Hello world");
}

sayHello();

//recall fungsi berulang
function sayMultiHello() {
    for (i = 0; i < 2; i++) {
        sayHello();
    }
}

sayMultiHello();

//cara iterasi fungsi dengan masukan nilai pada kurungan
function sayMultiHelo2(n) {
    for (i = 0; i < n; i++) {
        sayHello();
    }
}

sayMultiHelo2(7);
