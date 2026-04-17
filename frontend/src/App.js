import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  // Fetch books from backend
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/books/")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Ask AI question
  const askAI = () => {
    axios.post("http://127.0.0.1:8000/api/query/", {
      question: question
    })
    .then((res) => setAnswer(res.data.answer))
    .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      <h1>📚 Book Insight Platform</h1>

      {/* Book List */}
      <h2>Books</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        books.map((book) => (
          <div key={book.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Rating:</strong> {book.rating}</p>
          </div>
        ))
      )}

      {/* AI Section */}
      <h2>Ask AI</h2>
      <input
        type="text"
        placeholder="Ask something about books..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />
      <button onClick={askAI} style={{ marginLeft: "10px", padding: "8px" }}>
        Ask
      </button>

      {/* Answer */}
      {answer && (
        <div style={{ marginTop: "20px" }}>
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
