import { Book } from "../models/book.js"

function newBook(req,res){
  res.render('books/new', {
    title: "Add a New Book"
  })
}

function index(req, res) {
  Book.find({}, function (error, books) {
    console.log(error)
    res.render("books/index", {
      error: error,
      books,
      title: 'Book List',
    })
  })
}

function create(req, res) {
  const book = new Book(req.body)
  console.log(book)
  book.save(function(err) {
    if (err) return res.redirect('/books/new');
    res.redirect(`/books`);
  });}
  
function deleteBook(req, res) {
  Book.findByIdAndDelete(req.params.id, function(err, book) {
    res.redirect('/books')
  })
}

export {
  newBook as new,
  index,
  create,
  deleteBook as delete
}