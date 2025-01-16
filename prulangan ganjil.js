let jumlah = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        jumlah += i;
    }
}

console.log("Jumlah bilangan ganjil dari 1 hingga 100 adalah:", jumlah);