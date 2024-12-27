function treasureHunter(journey) {
  let treasureValue = 0;

  for (let char of journey) {
      if (char === '$') {
          treasureValue += 100;
      } else if (char === 'x') {
          if (treasureValue < 10) {
              treasureValue = 0;
          } else {
              treasureValue -= 10;
          }
      } else if (char === '#') {
          treasureValue *= 0.5;
      }

      // Pastikan nilai harta karun tidak negatif
      treasureValue = Math.max(treasureValue, 0);
  }

  return treasureValue;
}

// Contoh pengujian, jika perlu
console.log(treasureHunter("$x$#x$")); // 185
console.log(treasureHunter("$$#x$$")); // 290
console.log(treasureHunter("x$#x$#x$")); // 160
console.log(treasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = treasureHunter; // Menggunakan nama fungsi yang benar
