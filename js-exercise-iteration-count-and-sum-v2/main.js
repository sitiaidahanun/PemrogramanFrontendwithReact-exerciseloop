function countAndSum(number) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
      // Hitung 1 sampai 3 secara berulang menggunakan modulus
      sum += (i % 3) + 1; // Menggunakan modulus untuk mendapatkan angka 1, 2, 3
  }

  return sum;
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 0

module.exports = countAndSum;
