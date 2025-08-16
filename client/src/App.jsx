import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/trivia")
      .then((res) => res.json())
      .then((data) => {
        const withIds = data.map((question, index) => ({
          ...question,
          id: index + 1,
        }));
        setQuestionData(withIds);
      })
      .catch(() => setQuestionData("Error fetching data"));
  }, []);

  console.log(questionData);

  return (
    <main>
      <i class="fa-solid fa-house-chimney"></i>
      <header>
        <h1 className="text-3xl font-bold text-center">Citizenship Trivia</h1>
      </header>
      <h2 className="font-bold mt-10 text-2xl">Trivia Question</h2>
      <div className="mb-7">
        {questionData.map((question, index) => (
          <div className="question-container">
            <p>
              <span className="text-amber-500">Question {index + 1}:</span>{" "}
              {question.question}
            </p>
            <div>
              <span className="text-amber-500">Answer:</span>
              {question.answers.map((ans) => (
                <p>- {ans}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mr-10 mb-10">
        <Link
          to="/flashcards"
          className="bg-amber-400 p-2 rounded-md inline-block"
        >
          Flash Card
        </Link>
      </div>
    </main>
  );
}

export default App;
