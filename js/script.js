const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        let phrase = this.title + " by " + this.author + ", " + this.pages + " pages, "

        if (!this.read) {
            phrase += "not read yet"
        } else {
            phrase += "already read"
        }

        return phrase
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBooks() {
    myLibrary.map((book) => {
        console.log(book)
    })
}

// Test books