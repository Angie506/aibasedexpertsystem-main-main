import React, { useState } from "react";
import styles from '../Forward.module.css';
import bookgif from '../assets/giphy.gif';

const books = [
  { title: "Lord of the Rings", genre: "Fantasy", subgenre: "Epic" },
  { title: "Harry Potter", genre: "Fantasy", subgenre: "Light" },
  { title: "Sherlock Holmes", genre: "Mystery", era: "Classic" },
  { title: "Gone Girl", genre: "Mystery", era: "Modern" },
  { title: "The Martian", genre: "Sci-Fi", type: "Hard" },
  { title: "Dune", genre: "Sci-Fi", type: "Soft" },
  { title: "SPQR", genre: "History", era: "Ancient" },
  { title: "Sapiens", genre: "History", era: "Modern" },
  { title: "Atomic Habits", genre: "Self-help", focus: "Productivity" },
  { title: "The Power of Now", genre: "Self-help", focus: "Mindfulness" }
];

export default function ForwardChainBook() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [recommendation, setRecommendation] = useState(null);

  const handleSelect = (key, value) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    const isFinalStep = step === 2;
    if (isFinalStep) {
      inferRecommendation(newAnswers);
    } else {
      setStep(step + 1);
    }
  };

  const inferRecommendation = (selectedAnswers) => {
    let results = books.filter((book) =>
      Object.entries(selectedAnswers).every(([key, value]) => book[key] === value)
    );
    setRecommendation(results.length > 0 ? results.map((book) => book.title).join(", ") : "No matching books found 😢");
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({});
    setRecommendation(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Book Recommender</h1>
      <p className={styles.description}>
        Answer a few questions and let´s see if we can find your perfect book! 📖✨
      </p>

      <br />
      {recommendation ? (
        <div className={styles.resultContainer}>
          <h2 className={styles.result}>
            You should definitely check out: <br />
            <i>{recommendation}! </i> 🤩 
          </h2>
          <br />
          <div className={styles.gifContainer}>
            <img src={bookgif} alt="Book gif" />
          </div>
          {/* Try Again Button */}
          <br />
          <button className={styles.tryAgainButton} onClick={resetQuiz}>
            Try Again✨
          </button>
        </div>
      ) : (
        <div className={styles.questionContainer}>
          {step === 1 && (
            <>
              <h2 className={styles.question}>What genre do you prefer?</h2>
              <div className={styles.buttonGroup}>
                {['Fantasy', 'History', 'Sci-Fi', 'Self-help', 'Mystery'].map((genre) => (
                  <button key={genre} className={styles.button} onClick={() => handleSelect("genre", genre)}>{genre}</button>
                ))}
              </div>
            </>
          )}

          {step === 2 && answers.genre === "Fantasy" && (
            <>
              <h2 className={styles.question}>What type of Fantasy?</h2>
              <div className={styles.buttonGroup}>
                {['Epic', 'Light'].map((subgenre) => (
                  <button key={subgenre} className={styles.button} onClick={() => handleSelect("subgenre", subgenre)}>{subgenre}</button>
                ))}
              </div>
            </>
          )}

          {step === 2 && answers.genre === "History" && (
            <>
              <h2 className={styles.question}>Do you prefer Ancient or Modern history?</h2>
              <div className={styles.buttonGroup}>
                {['Ancient', 'Modern'].map((era) => (
                  <button key={era} className={styles.button} onClick={() => handleSelect("era", era)}>{era}</button>
                ))}
              </div>
            </>
          )}

          {step === 2 && answers.genre === "Sci-Fi" && (
            <>
              <h2 className={styles.question}>What type of Sci-Fi?</h2>
              <div className={styles.buttonGroup}>
                {['Hard', 'Soft'].map((type) => (
                  <button key={type} className={styles.button} onClick={() => handleSelect("type", type)}>{type}</button>
                ))}
              </div>
            </>
          )}

          {step === 2 && answers.genre === "Mystery" && (
            <>
              <h2 className={styles.question}>Do you prefer Classic or Modern Mystery?</h2>
              <div className={styles.buttonGroup}>
                {['Classic', 'Modern'].map((era) => (
                  <button key={era} className={styles.button} onClick={() => handleSelect("era", era)}>{era}</button>
                ))}
              </div>
            </>
          )}

          {step === 2 && answers.genre === "Self-help" && (
            <>
              <h2 className={styles.question}>What do you want to focus on?</h2>
              <div className={styles.buttonGroup}>
                {['Productivity', 'Mindfulness'].map((focus) => (
                  <button key={focus} className={styles.button} onClick={() => handleSelect("focus", focus)}>{focus}</button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}