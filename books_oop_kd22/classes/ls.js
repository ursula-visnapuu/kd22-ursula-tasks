class LS {
    addBook(book){
        let books = this.getData('books_oop')
        books.push(book)
        this.setData('books_oop', books)
    }

    getBooks(){
        return this.getData('books_oop')
    }

    deleteBook(book){
        let books = this.getData('books_oop')
        books.forEach(function(bookFromLS, index){
            if( bookFromLS.title === book.title && bookFromLS.author === book.author && bookFromLS.isbn === book.isbn){
                books.splice(index, 1)
            }
        })
        this.setData('books_oop', books)
    }

    getData(name){
        let data // array for user inputs
        if(localStorage.getItem(name) === null){
            data = []
        } else {
            data = JSON.parse(localStorage.getItem(name))
        }
        return data
    }

    setData(name, data){
        localStorage.setItem(name, JSON.stringify(data))
    }
}