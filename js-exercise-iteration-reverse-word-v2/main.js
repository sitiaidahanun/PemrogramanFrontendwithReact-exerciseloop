function reverseUnique(word) {
  let reverse = '';
  let lastChar = '';

  for (let i = word.length - 1; i >= 0; i--) {
      if (lastChar !== word[i]) {
          reverse += word[i]; 
          lastChar = word[i]; 
      }
  }

  return reverse; 
}

// pemanggilan fungsi
console.log(reverseUnique('greating')); // Output: "gnitaerg"
console.log(reverseUnique('book')); // Output: "kob"
console.log(reverseUnique('RuangGuru')); // Output: "uruGgnauR"
console.log(reverseUnique('I am learning Javascript')); // Output: "tpircsavaJ gninrael ma I"
console.log(reverseUnique('I am reading a book how to hunt a deer')); // Output: "red a tnuh ot woh kob a gnidaer ma I"

// Ekspor fungsi
module.exports = reverseUnique;
