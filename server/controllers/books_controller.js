let books = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books)
    },
    create: (req, res) => {
        const {title, author} = req.body;
        let newBook = {id, title, author};
        books.push(newBook);
        id++;
        res.status(200).send(books);
    },
    update: (req, res) => {
        const {title, author} = req.body;
        const { id } = req.params;
        let index = books.findIndex( book => book.id === +id)
        books[index] = {
            id: books[index].id,
            title: title || books[index].title,
            author: author || books[index].author
        };
        res.status(200).send(books);
    },
    delete: (req,res) => {
        let index = books.findIndex( book => book.id === +req.params.id);
        books.splice(index, 1);
        res.status(200).send(books);
    }
}