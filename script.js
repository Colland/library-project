
let myLibrary = [];

function Book(author, title, numPages, finished)
{
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.finished = finished;
}

const adderButtton = document.querySelector("#adder");
const modalDisplay = document.querySelector("#bookModal");
const overlay = document.querySelector("#overlay");
const submit = document.querySelector('#submit')

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

submit.addEventListener('click', addBookToLibrary)

function addBookToLibrary()
{
    let book = new Book();

    book.title = document.querySelector("#title").value;
    book.author = document.querySelector("#author").value;
    book.numPages = document.querySelector("#pages").value;
    book.finished = document.querySelector("#finishedCheckBox").checked;
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
    pages.textContent = book.numPages;
    remove.textContent = "Remove";

    if(book.finished)
    {
        read.textContent = "read";
    }
    else
    {
        read.textContent = "not read";
    }

    bookCard.classList.add("bookCard")

    bookCard.appendChild(author);
    bookCard.appendChild(title);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(remove);

    bookGrid.appendChild(bookCard);
}
