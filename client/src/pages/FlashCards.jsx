import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function FlashCards() {
  const [triviaData, setTriviaData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/trivia")
      .then((res) => res.json())
      .then((data) => {
        const withIds = data.map((question, index) => ({
          ...question,
          id: index + 1,
        }));
        setTriviaData(withIds);
      })
      .catch(() => console.error("Fail fetching in FlashCard"));
  }, []);

  const handlePrev = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev === 0 ? triviaData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev === triviaData.length - 1 ? 0 : prev + 1));
  };

  if (triviaData.length === 0) {
    return <p className="p-6">Loading...</p>;
  }

  const currentCard = triviaData[currentIndex];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Flash Cards</h1>

      {/* Container */}
      <div className="flashCard-container  h-[75vh] w-[95%] flex flex-col mx-auto mt-20">
        {/* Question/Answer area */}
        <div className="h-[75%] flex items-center justify-center">
          <div
            className="relative w-[800px] h-[600px] cursor-pointer [perspective:1000px] hover:scale-105 hover:shadow-xl transition-transform duration-300"
            onClick={() => setFlipped(!flipped)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                flipped ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front (Question) */}
              <div className="absolute w-full h-full bg-white rounded-md shadow flex items-center justify-center [backface-visibility:hidden] p-10">
                <p className="text-black text-xl">{currentCard.question}</p>
              </div>

              {/* Back (Answer) */}
              <div className="absolute w-full h-full bg-white rounded-md shadow flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] p-10">
                <div className="text-black text-lg space-y-2">
                  {currentCard.answers.map((ans, i) => (
                    <p key={i}>• {ans}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="h-[25%] flex items-end justify-between px-10 pb-5">
          <button
            className="bg-amber-500 px-4 py-2 rounded-2xl shadow hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors duration-200"
            onClick={handlePrev}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <p className="font-bold p-2.5 rounded-2xl bg-amber-500 text-black">
            {currentCard.id}/100
          </p>

          <button
            className="bg-amber-500 px-5 py-2 rounded-2xl shadow hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors duration-200"
            onClick={handleNext}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </main>
  );
}
