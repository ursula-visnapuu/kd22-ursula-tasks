class UI{
    addBook(book){
        const bookRow = document.createElement('tr')
        bookRow.innerHTML = `
                        <td>${book.title}</td>
                        <td>${book.author}</td>   
                        <td>${book.isbn}</td>   
                        <td><a href="#">X</a></td>`
        const booksTable = document.querySelector('#books')
        booksTable.appendChild(bookRow)
    }

    deleteBook(eventTarget){
        const X = this.parentElement(eventTarget)
        const bookRow = this.parentElement(X)
        bookRow.remove()

        const isbn = this.previousElement(X)
        const author = this.previousElement(isbn)
        const title = this.previousElement(author)

        const book = new Book(title.textContent, author.textContent, isbn.textContent)
        return book
    }

    parentElement(element){
        return element.parentElement
    }
    previousElement(element){
        return element.previousElementSibling
    }

    getInputData(selector){
        return document.querySelector(selector).value
    }

    clearInputData(selector){
        document.querySelector(selector).value = ''
    }
}