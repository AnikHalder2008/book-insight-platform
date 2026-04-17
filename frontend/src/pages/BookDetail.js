import React, { useEffect, useState } from "react";
import axios from "axios";

function BookDetail({ bookId }) {
  const [book, setBook] = useState(null);
  const [summary, setSummary] = useState("");
  const [genre, setGenre] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (!bookId) return;

    axios.get(`http://127.0.0.1:8000/api/books/${bookId}/`)
      .then(res => setBook(res.data))
      .catch(err => console.error(err));

    axios.get(`http://127.0.0.1:8000/api/summary/${bookId}/`)
      .then(res => setSummary(res.data.summary))
      .catch(err => console.error(err));

    axios.get(`http://127.0.0.1:8000/api/genre/${bookId}/`)
      .then(res => setGenre(res.data.genre))
      .catch(err => console.error(err));

    axios.get(`http://127.0.0.1:8000/api/recommend/${bookId}/`)
      .then(res => setRecommendations(res.data.recommendations))
      .catch(err => console.error(err));

  }, [bookId]);

  if (!book) return <p>Select a book to view details</p>;

  return (
    <div className="container">
      <h1>{book.title}</h1>

      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Rating:</strong> {book.rating}</p>

      <h2>Summary</h2>
      <p>{summary}</p>

      <h2>Genre</h2>
      <p>{genre}</p>

      <h2>Recommendations</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetail;
