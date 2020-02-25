let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
  }
}

function addBookToLibrary() {
  // const title = document.createElement('input')
  // document.body.appendChild(title)
  // const author = document.createElement('input')
  // document.body.appendChild(author)
  // const pages = document.createElement('input')
  // document.body.appendChild(pages)
  // const read = document.createElement('input')
  // read.setAttribute('type', 'checkbox')
  // document.body.appendChild(read)
  const title = prompt('Enter the book title:')
  const author = prompt('Enter the author:')
  const pages = prompt('Enter the number of pages:')
  const read = prompt('Enter read/not read:')

  const newBook = new book(title, author, pages, read);
  myLibrary.push(newBook)
  console.log(myLibrary)
}

function render() {

}

// const theHobbit = new book('The Hobbit', 'Tolkien', 295, 'not read')

// console.log(theHobbit.info());

const newBook = document.querySelector('#newBook')
newBook.addEventListener('click', () => addBookToLibrary())