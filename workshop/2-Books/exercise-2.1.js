// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
    constructor(title, genre, author, isRead) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead || false;
    }
}
const book1 = new Book('To Kill a Mockingbird', 'novel', 'Harper Lee', true);
const book2 = new Book('ALL THE LIGHT WE CANNOT SEE: A NOVEL', 'novel', 'Anthony Doerr', false);
const book3 = new Book('THE LIES THAT BIND', 'fiction', 'Emily Giffin');
const book4 = new Book('TRUTH: A BRIEF HISTORY OF TOTAL BULLSH*T', 'non-fiction', 'Tom Phillips');
const book5 = new Book('Beautiful Disaster', 'romance', 'Jamie McGuire', true);

console.log(book1, book2, book3, book4, book5);
