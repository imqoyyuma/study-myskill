var car = {
    //properti, untuk memanggilnya perlu gunakan console.log()
    type: "fiat",
    model: "500",
    color: "white",
    //bisa tambah objek lagi di dalam objek
    date: {
        year: "2023",
        month: "Desember",
        day: 25,
    },
    //bisa tambah array di dalam objek
    data: [1, 2, 3, 4, 5],

    //method, alias fungsi, untuk memanggilnya cukup ketik langsung saja => car.start
    start: function () {
        console.log("ini method start");
    },
    drive: function () {
        console.log("ini method drive");
    },
    brake: function () {
        console.log("ini method brake");
    },
    stop: function () {
        console.log("ini method stop");
    },
};

car.start();
console.log(car.color);
console.log(car.date.year);
console.log(car.data[4]);
