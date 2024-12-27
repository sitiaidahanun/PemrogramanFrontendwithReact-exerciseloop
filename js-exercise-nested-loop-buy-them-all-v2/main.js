function buyThemAll(books, budget) {
  const bookList = books.split(',').map(book => {
      const [title, price] = book.split(':');
      return { title, price: Number(price) };  // Mengubah harga menjadi angka
  });

  let totalSpent = 0; // Total uang yang dikeluarkan
  let purchasedBooks = []; // Daftar buku yang dibeli

  // Menggunakan nested loop untuk iterasi buku
  for (let i = 0; i < bookList.length; i++) {
      let remainingBudget = budget - totalSpent; // Sisa uang
      if (bookList[i].price <= remainingBudget) {
          totalSpent += bookList[i].price; // Tambahkan harga buku ke total
          purchasedBooks.push(bookList[i].title); // Tambahkan judul buku ke daftar
      }
  }

  // Menghasilkan output berdasarkan kondisi
  if (purchasedBooks.length > 0) {
      return `Afista membeli ${purchasedBooks.length} buku yaitu ${purchasedBooks.join(', ')}. Total belanja ${totalSpent}, sisa uang Afista adalah ${budget - totalSpent}.`;
  } else {
      return `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${budget}.`;
  }
}

// Contoh penggunaan
console.log(buyThemAll("The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000", 100000));
// Output: Afista membeli 2 buku yaitu The Alchemist, The Hobbit. Total belanja 95000, sisa uang Afista adalah 5000.

console.log(buyThemAll("The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000", 50000));
// Output: Afista membeli 1 buku yaitu The Hobbit. Total belanja 40000, sisa uang Afista adalah 10000.

console.log(buyThemAll("The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000", 10000));
// Output: Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 10000.

console.log(buyThemAll("The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000", 0));
// Output: Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.

console.log(buyThemAll("The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000", 200000));
// Output: Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 75000.


module.exports = buyThemAll;
