const idCol = document.querySelector('#id')
const titleCol = document.querySelector('#title')
const authorCol = document.querySelector('#author')
const pagesCol = document.querySelector('#pages')
const readCol = document.querySelector('#read')
const changeCol = document.querySelector('#change')
const removeCol = document.querySelector('#remove')

const newBook = document.querySelector('#newBook')
newBook.addEventListener('click', () => addBookToLibrary())

let myLibrary = [];

function book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
  }
}

function addBookToLibrary() {
  const id = myLibrary.length + 1
  const title = prompt('Enter the book title:')
  const author = prompt('Enter the author:')
  const pages = parseInt(prompt('Enter the number of pages:'))
  const read = prompt('Enter read/not read:')

  const newBook = new book(id, title, author, pages, read);
  myLibrary.push(newBook)
  console.log(myLibrary)
  render()
}

function render() {
  let book = myLibrary[myLibrary.length - 1]
  let id = document.createElement('div')
  id.innerHTML = book.id
  idCol.appendChild(id)
  let title = document.createElement('div')
  title.innerHTML = book.title
  titleCol.appendChild(title)
  let author = document.createElement('div')
  author.innerHTML = book.author
  authorCol.appendChild(author)
  let pages = document.createElement('div')
  pages.innerHTML = book.pages
  pagesCol.appendChild(pages)
  let read = document.createElement('div')
  read.innerHTML = book.read
  readCol.appendChild(read)
  let change = document.createElement('input')
  change.type = 'checkbox'
  changeCol.appendChild(change)
  let remove = document.createElement('button')
  remove.innerHTML = 'Remove'
  removeCol.appendChild(remove)
}

// const theHobbit = new book('The Hobbit', 'Tolkien', 295, 'not read')

// console.log(theHobbit.info());

