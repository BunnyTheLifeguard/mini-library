//Declarations & book constructor
const idCol = document.querySelector('#id')
const titleCol = document.querySelector('#title')
const authorCol = document.querySelector('#author')
const pagesCol = document.querySelector('#pages')
const readCol = document.querySelector('#read')
const changeCol = document.querySelector('#change')
const removeCol = document.querySelector('#remove')

const newBook = document.querySelector('#newBook')
newBook.addEventListener('click', () => addInputFields())

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

//Main functionality
function addInputFields() {
  if(removeCol.contains(document.querySelector('#submit'))) {
  } else {
    const emptyId = document.createElement('div')
    emptyId.setAttribute('id', 'emptyId')
    emptyId.textContent = 'New book:'
    idCol.prepend(emptyId)

    const title = document.createElement('input')
    title.setAttribute('id', 'iTitle')
    titleCol.prepend(title)
    
    const author = document.createElement('input')
    author.setAttribute('id', 'iAuthor')
    authorCol.prepend(author)

    const pages = document.createElement('input')
    pages.setAttribute('id', 'iPages')
    pagesCol.prepend(pages)

    const read = document.createElement('input')
    read.setAttribute('id', 'iRead')
    readCol.prepend(read)

    const swap = document.createElement('button')
    swap.setAttribute('id', 'swap')
    swap.innerHTML = 'Read/Not read'
    changeCol.prepend(swap)

    swap.addEventListener('click', () => {
      if(read.value === '' || read.value.toLowerCase() === 'not read') {
        read.value = 'Read'
        swap.innerHTML = 'Not read'
      } else {
        read.value = 'Not read'
        swap.innerHTML = 'Read'
      }
    })

    const submit = document.createElement('button')
    submit.setAttribute('id', 'submit')
    submit.innerHTML = 'Submit'
    removeCol.prepend(submit)
    submit.addEventListener('click', () => addBook())
  }
}

function swapReadStatus(book) {
  if(book.read === 'Read') {
    book.read = 'Not read'
  } else {
    book.read = 'Read'
  }
  render()
}

function addBook() {
  const id = myLibrary.length
  const title = document.querySelector('#iTitle').value
  const author = document.querySelector('#iAuthor').value
  const pages = document.querySelector('#iPages').value
  const read = capitalizeFirstLetter(document.querySelector('#iRead').value)

  if(title === '') {
    alert('No title given.')
    addInputFields()
  } else if(author === '') {
    alert('No author given.')
    addInputFields()
  } else if(pages === '') {
    alert('No number of pages given.')
    addInputFields()
  } else if(isNaN(pages)) {
    alert('Number of pages is not a valid number.')
    addInputFields()
  } else if(read === '') {
    alert('No "read/not read" for given.')
    addInputFields()
  } else if (read !== 'Read' && read !== 'Not read') {
    alert('Either enter "Read" or "Not read".')
    addInputFields()
  } else {
    const newBook = new book(id, title, author, pages, read);
    myLibrary.push(newBook) 
    render()
  }  
}

function removeBook(book) {
  myLibrary = myLibrary.filter(function(element) {
    return element.id !== book.id
  })
  render()
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function render() {
  //Clear columns before rendering
  document.querySelector('#id').innerHTML = ''
  document.querySelector('#title').innerHTML = ''
  document.querySelector('#author').innerHTML = ''
  document.querySelector('#pages').innerHTML = ''
  document.querySelector('#read').innerHTML = ''
  document.querySelector('#change').innerHTML = ''
  document.querySelector('#remove').innerHTML = ''

  for(let book of myLibrary){
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
  
    let change = document.createElement('button')
    change.addEventListener('click', () => swapReadStatus(book))
    if (book.read === 'Read' || book.read === 'read') {
      change.innerHTML = 'Not read'
    } else {
      change.innerHTML = 'Read'
    }  
    changeCol.appendChild(change)
  
    let remove = document.createElement('button')
    remove.setAttribute('class', 'rmvBtns')
    remove.innerHTML = 'Remove'
    remove.addEventListener('click', () => removeBook(book))
    removeCol.appendChild(remove)
  }
}

const theHobbit = new book(0, 'The Hobbit', 'J.R.R. Tolkien', 295, 'Not read')
myLibrary.push(theHobbit)
render()
const LMIC = new book(1, 'The Liberal Media Industrial Complex', 'Mark Dice', 182, 'Read')
myLibrary.push(LMIC)
render()
