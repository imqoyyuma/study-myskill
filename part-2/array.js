var mobil = ["Avanza", "Yaris", "Ayla"];
console.log(mobil);
console.log(mobil[1]);

//nambahin element pakai 'push'
mobil.push("Veloz");
console.log(mobil);

//print all element
for (i = 0; i < mobil.length; i++) {
    num = i + 1;
    console.log("Mobil ke " + num + " adalah " + mobil[i]);
}

//hapus elemen array metode 'delete' => delete mobil[3]
//hapus elemen paling belakang dengan metode 'pop()' => mobil.pop()
//hapus elemen paling depan dengan metode 'shift()' => mobil.shift()
