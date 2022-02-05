
let myLibrary = [];

function Book(author, title, numPages, finished)
{
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.finished = finished;
}

function addBookToLibrary()
{
    let book = new Book();

    book.author = prompt("Author of your book?");
    book.title = prompt("Title of your book?");
    book.numPages = prompt("How many pages in your book?");
    book.finished = prompt("Have you finished your book?");
    
    myLibrary.push(book);
}

const adderButtton = document.querySelector("#adder");
const modalDisplay = document.querySelector("#bookModal");
const overlay = document.querySelector("#overlay");

adderButtton.addEventListener('click', () => {
    modalDisplay.classList.add("active");
    overlay.classList.add("active");
})

window.addEventListener('click', (event) => {
    if(!event.target.closest("#bookModal"))
    {
        if(!event.target.closest("#adder"))
        {
            modalDisplay.classList.remove("active");
            overlay.classList.remove("active");
        }
    }
})
