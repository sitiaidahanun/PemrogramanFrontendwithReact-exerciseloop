function printNumber(totalNumber) {
    let result = '';

    for (let i = 0; i < totalNumber; i++) {
        // Hitung 1 sampai 3 secara berulang
        result += (i % 3) + 1; // Menggunakan modulus untuk mendapatkan angka 1, 2, 3
    }

    return result;
}

// Contoh pengujian
console.log(printNumber(2));  // OUTPUT: 12
console.log(printNumber(3));  // OUTPUT: 123
console.log(printNumber(6));  // OUTPUT: 123123
console.log(printNumber(10)); // OUTPUT: 1231231231
console.log(printNumber(30)); // OUTPUT: 123123123123123123123123123123123123123123

module.exports = printNumber; // Menyimpan fungsi untuk diimpor di file lain
