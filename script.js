
let myLibrary = [];

function Book(author, title, numPages, finished, bookID)
{
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.finished = finished;
    this.bookID = bookID;
}

const adderButtton = document.querySelector("#adder");
const modalDisplay = document.querySelector("#bookModal");
const overlay = document.querySelector("#overlay");
const submit = document.querySelector('#submit')

const modalTitle = document.querySelector("#title");
const modalAuthor = document.querySelector("#author");
const modalPages = document.querySelector("#pages");
const modalFinished = document.querySelector("#finishedCheckBox");

adderButtton.addEventListener('click', () => {
    modalDisplay.classList.add("active");
    overlay.classList.add("active");
})

window.addEventListener('mousedown', (event) => {
    if(!event.target.closest("#bookModal"))
    {
        if(!event.target.closest("#adder"))
        {
            modalDisplay.classList.remove("active");
            overlay.classList.remove("active");
        }
    }
})

submit.addEventListener('click', verifySubmit)

function verifySubmit()
{
    if(modalTitle.value == '')
    {
    }
    else if(modalAuthor.value == '')
    {
    }
    else if(modalPages.value == '')
    {
    }
    else
    {
        addBookToLibrary()
    }
}

function addBookToLibrary()
{
    let book = new Book();

    book.title = document.querySelector("#title").value;
    book.author = document.querySelector("#author").value;
    book.numPages = document.querySelector("#pages").value;
    book.finished = document.querySelector("#finishedCheckBox").checked;
    book.bookID = "id" + Math.random().toString(16).slice(2);
    myLibrary.push(book);

    document.querySelector("#title").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#pages").value = '';
    document.querySelector("#finishedCheckBox").checked = false;

    modalDisplay.classList.remove("active");
    overlay.classList.remove("active");

    displayBookCard(book)
}

function displayBookCard(book)
{
    const bookCard = document.createElement('div');
    const author = document.createElement('p');
    const title = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('button');
    const remove = document.createElement('button');
    const bookGrid = document.querySelector("#bookGrid");

    author.textContent = book.author;
    title.textContent = book.title;
    pages.textContent = book.numPages + " pages";
    remove.textContent = "Remove";

    if(book.finished)
    {
        read.textContent = "Read";
        read.style.backgroundColor = "#63ff63";
    }
    else
    {
        read.textContent = "Not read";
        read.style.backgroundColor = "#ff6464";
    }

    bookCard.classList.add("bookCard");
    author.classList.add("cardLabel");
    title.classList.add("cardLabel");
    pages.classList.add("cardLabel");
    remove.classList.add("cardButton");
    read.classList.add("cardButton");

    bookCard.dataset.bookID = book.bookID;

    remove.addEventListener('click', (e) => {
        e.target.parentNode.remove();
        myLibrary.splice(myLibrary.indexOf(book), 1);
    })

    read.addEventListener('click', (e) => {
        let arrayBuffer = myLibrary.filter(book => book.bookID == e.target.parentNode.dataset.bookID);
        let currentBook = arrayBuffer[0];
        
        if(currentBook.finished == true)
        {
            e.target.textContent = "Not read";
            e.target.style.backgroundColor = "#ff6464";
        }
        else
        {
            e.target.textContent = "Read";
            e.target.style.backgroundColor = "#63ff63"
        }

        currentBook.finished = !currentBook.finished;
    })

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(remove);

    bookGrid.appendChild(bookCard);
}
