// Exercise 2.2
// ------------
// Create a BookList class that has the following properties:
//      - `books` (empty array)
//      - `lastRead` - reference to last book read (null for now)
//      - `currentlyReading` - reference to current book (null for now)
//
// Then instantiate it once as 'homeLibrary'

// Console.log(homeLibrary) to verify that all is working.

class BookList {
  // Code here
  constructor(books, lastRead, currentlyReading) {
    this.books = books;
    this.lastRead = lastRead;
    this.currentlyReading = currentlyReading;
  }
}

const homeLibrary = new BookList([], null, null);
console.log(homeLibrary);
