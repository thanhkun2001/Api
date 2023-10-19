const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const books = [
  { id: 1, code: "100", title: "Book 1", author: "Author 1", price: 19.99 },
  { id: 2, code: "101", title: "Book 2", author: "Author 2", price: 29.99 },
  { id: 3, code: "102", title: "Book 3", author: "Author 3", price: 14.99 },
  { id: 4, code: "103", title: "Book 4", author: "Author 4", price: 14.99 },
  { id: 5, code: "104", title: "Book 5", author: "Author 5", price: 14.99 },
  { id: 6, code: "105", title: "Book 6", author: "Author 6", price: 14.99 },
  { id: 7, code: "106", title: "Book 7", author: "Author 7", price: 14.99 },
  { id: 8, code: "107", title: "Book 8", author: "Author 38", price: 14.99 },
];

// Lấy danh sách tất cả sách
app.get("/api/books", (req, res) => {
  res.json(books);
});
app.get("/api/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Sách không tồn tại" });
  }
});
app.post("/api/books", (req, res) => {
  const newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);
  res.status(201).json(newBook);
});
app.put("/api/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body;
  const index = books.findIndex((b) => b.id === bookId);
  if (index !== -1) {
    books[index] = { ...books[index], ...updatedBook };
    res.json(books[index]);
  } else {
    res.status(404).json({ message: "ccccccccccc" });
  }
});

app.delete("/api/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === bookId);

  if (index !== -1) {
    const deletedBook = books.splice(index, 1);
    res.json(deletedBook);
  } else {
    res.status(404).json({ message: "Sách không tồn tại" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
