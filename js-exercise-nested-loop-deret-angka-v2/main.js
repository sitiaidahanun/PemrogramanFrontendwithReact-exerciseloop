function deretanAngkaHinggaN(n) {
  // Memeriksa apakah n valid
  if (n <= 1) {
      return "Incorrect param";
  }

  let result = ""; // Variabel untuk menyimpan hasil akhir

  // Loop dari n-1 hingga 1
  for (let i = n - 1; i >= 1; i--) {
      // Tambahkan deretan angka dari i hingga 1 ke hasil
      for (let j = i; j >= 1; j--) {
          result += j;
      }
  }

  return result; // Mengembalikan hasil
}

// Contoh penggunaan
console.log(deretanAngkaHinggaN(4)); // Output: 321211
console.log(deretanAngkaHinggaN(6)); // Output: 543214321321211
console.log(deretanAngkaHinggaN(1)); // Output: Incorrect param
console.log(deretanAngkaHinggaN(0)); // Output: Incorrect param
console.log(deretanAngkaHinggaN(-5)); // Output: Incorrect param


module.exports = deretanAngkaHinggaN;
