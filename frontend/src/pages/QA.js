import React, { useState } from "react";
import axios from "axios";

function QA() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = () => {
    if (!question) return;

    setLoading(true);

    axios.post("http://127.0.0.1:8000/api/query/", {
      question: question,
    })
    .then((res) => {
      setAnswer(res.data.answer);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
  };

  return (
    <div className="container">
      <h1>🤖 Ask AI</h1>

      <input
        type="text"
        placeholder="Ask something about books..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={askQuestion}>
        Ask
      </button>

      {loading && <p>Loading...</p>}

      {answer && (
        <div className="answer-box">
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default QA;
