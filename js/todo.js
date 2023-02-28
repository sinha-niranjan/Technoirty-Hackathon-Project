class Todo {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

let todoList = [];

// Modal selectors.
const container = document.querySelector("#container");
const addtodobtn = document.querySelector("#add-todo");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#close");


// Form selectors.
const titleField = document.querySelector("#title");
const authorField = document.querySelector("#author");
const pagesField = document.querySelector("#pages");
const readField = document.querySelector("#read");
const submitBtn = document.querySelector("#submit");

// Event Listeners.
addtodobtn.addEventListener("click", () => {
    modal.style.display = "block";
});

submitBtn.addEventListener("click", () => {
    if (formValidation()) {
        todoList.push(addBookToLibrary());
        displayBooks();
        saveBooks();
        modal.style.display = "none";
        clearForm();
    }
});

closeBtn.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
    if (e.target == modal) modal.style.display = "none";
});

function saveBooks() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

function getBooks() {
    myLibrary = JSON.parse(localStorage.getItem("todoList"));
    if (todoList == null) todoList = [];
    displayBooks();
}

getBooks();