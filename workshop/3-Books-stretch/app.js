class Book {
    constructor(title, genre, author, url, isRead) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.url = url;
        this.isRead = isRead || false;
    }
}

class BookList {
    constructor() {
        this.books = [];
        this.currentlyReading = null;
        this.lastRead = null;
    }
    add = (book) => {
        this.books.push(book);
        if (!this.currentlyReading) this.currentlyReading = book;
    }
    startReading = (bookTitle) => {
        const book = this.books.find( elem => elem.title === bookTitle);
        this.currentlyReading = book;
    }
    finishReading = (bookTitle) => {
        const book = this.books.find( elem => elem.title === bookTitle);
        this.lastRead = book;
        this.currentlyReading = null;
        book.isRead = true;
    }
    getNumRead = () => this.books.filter( elem => elem.isRead ).length;
    getNumUnread = () => this.books.filter( elem => !elem.isRead ).length;
}

const homeLibrary = new BookList();

homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Shiningnovel.jpg/220px-Shiningnovel.jpg'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman', 'https://images-na.ssl-images-amazon.com/images/I/51GcnFtO1+L._SX308_BO1,204,203,200_.jpg'));
homeLibrary.add(
  new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', 'https://eloquentjavascript.net/2nd_edition/img/cover.png', true)
);
homeLibrary.add(new Book('The Eire Affair', 'Fantasy', 'Jasper Fforde', 'https://images-na.ssl-images-amazon.com/images/I/81bcsJkLwHL.jpg'));
homeLibrary.add(
  new Book('The Revisionists', 'Science-fiction', 'thomas Mullen', 'https://d.gr-assets.com/books/1327901632l/10789142.jpg')
);
homeLibrary.finishReading('The Shining');
homeLibrary.startReading('The Revisionists');


//Books section
const books = document.querySelector('.books');
let booksNum = homeLibrary.books.length;
const totalBooks = document.querySelector('.totalBooks');
totalBooks.innerText = `(${booksNum})`;

const addBookDiv = (book, parentSec) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('bookdiv')
    const bookTitle = document.createElement('h3');
    bookTitle.innerText = `${book.title}\nBY\n${book.author}`;
    bookDiv.appendChild(bookTitle);
    const bookImg = document.createElement('img');
    bookImg.src = book.url;
    bookImg.alt = book.title;
    bookImg.classList.add('img');
    bookDiv.appendChild(bookImg);
    parentSec.appendChild(bookDiv);
}

homeLibrary.books.forEach( book => {
    addBookDiv(book, books);
} )

//Currently Reading
const currentlyReadingSec = document.querySelector('.currentlyReading');
addBookDiv(homeLibrary.currentlyReading, currentlyReadingSec);

//Finished Books
const finishedBookSec = document.querySelector('.finished');
const totalFinished = document.querySelector('.totalFinished');
const finishedBooks = homeLibrary.books.filter( elem => elem.isRead );
totalFinished.innerText = ` (${homeLibrary.getNumRead()})`;

finishedBooks.forEach( book => {
    addBookDiv(book, finishedBookSec);
})

//form
const submit = document.querySelector('.submit');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const formUrl = document.getElementById('url');
const formGenre = document.getElementById('genre');
const formRead = document.getElementById('checkbox');

const submitHandler = (e) => {
    e.preventDefault();
    const newBook = new Book(formTitle.value, formGenre.value, formAuthor.value, formUrl.value, formRead.checked);
    homeLibrary.add(newBook);
    addBookDiv(newBook, books);
    if (homeLibrary.currentlyReading == newBook) addBookDiv(newBook, currentlyReadingSec);
    if (newBook.isRead) addBookDiv(newBook, finishedBookSec);
    document.querySelector('.form').reset();
}
submit.addEventListener('click', submitHandler);