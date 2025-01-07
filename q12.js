class Book {
    constructor(title, author, status = 'available') {
        this.title = title;
        this.author = author;
        this.status = status;
    }

    borrow() {
        if (this.status === 'available') {
            this.status = 'borrowed';
        }
    }

    return() {
        if (this.status === 'borrowed') {
            this.status = 'available';
        }
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    searchByTitle(title) {
        return this.books.filter(book => book.title.includes(title));
    }

    searchByAuthor(author) {
        return this.books.filter(book => book.author.includes(author));
    }

    markOverdue(book, returnDate, dueDate) {
        if (returnDate > dueDate) {
            let fine = (returnDate - dueDate) * 0.5;
            return fine;
        }
        return 0;
    }
}
