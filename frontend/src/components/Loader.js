import React from "react";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Rating:</strong> {book.rating || "N/A"}</p>
      <p><strong>Description:</strong> {book.description || "No description available"}</p>

      <a href={book.url} target="_blank" rel="noreferrer">
        View Book
      </a>
    </div>
  );
}

export default BookCard;
