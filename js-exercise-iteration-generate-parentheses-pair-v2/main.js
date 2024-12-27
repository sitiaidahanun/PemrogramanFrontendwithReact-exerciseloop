function generateParenthesesPair(n) {
  let result = '';

  for (let i = 0; i < n; i++) {
      result += '(';  // Menambahkan kurung buka
  }
  for (let i = 0; i < n; i++) {
      result += ')';  // Menambahkan kurung tutup
  }

  return result;
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
