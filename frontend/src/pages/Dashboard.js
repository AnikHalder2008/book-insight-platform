import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";

function Dashboard({ onSelectBook }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/books/")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>📚 Dashboard</h1>

      {loading ? (
        <Loader />
      ) : books.length === 0 ? (
        <p>No books available</p>
      ) : (
        books.map((book) => (
          <div key={book.id} onClick={() => onSelectBook(book.id)}>
            <BookCard book={book} />
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
