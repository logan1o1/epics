import React, { useState } from "react";

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [showReport, setShowReport] = useState(false);
  const [score, setScore] = useState(0);
  const maxScore = 30;   
  
  const handleAnswer = (question, answer, points) => {
    setAnswers({ ...answers, [question]: { answer, points } });
  };

  const calculateScore = () => {
    let totalScore = 0;
    // Calculate total score based on answers
    Object.keys(answers).forEach((question) => {
      const { answer, points } = answers[question];
      // Add points based on the selected answer
      if (answer === "a") {
        totalScore += points; // Add points for option A
      } else if (answer === "b") {
        totalScore += points; // Add points for option B
      } else if (answer === "c") {
        totalScore += points; // Add points for option C
      }
    });
    
    setScore(Math.min(totalScore, maxScore));
  };

  const handleSubmit = () => {
    calculateScore();
    setShowReport(true);
    window.scrollTo(0, 0);
  };

  const renderOption = (label, value, question, points) => (
    <li key={value}>
      <label>
        <input
          type="radio"
          name={question}
          value={value}
          onChange={() => handleAnswer(question, value, points)}
        />
        {label}
      </label>
    </li>
  );

  return (
    <div
      className={`container mx-auto mt-24 p-8 rounded-md ${
        showReport ? "bg-blur" : ""
      }`}
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-cyan-500">
        Quiz
      </h1>

      {/* Questions */}
      {/* Question 1 */}
      <div className="mb-8 border p-4 rounded-md">
        <p className="text-lg font-semibold mb-2">
          1. Do you feel that social media has a positive or negative impact on
          your mental health?
        </p>
        <ul>
          {renderOption("A) Positive", "a", "q1", 3)}
          {renderOption("B) Neutral", "b", "q1", 2)}
          {renderOption("C) Negative", "c", "q1", 1)}
        </ul>
      </div>

      {/* Question 2 */}
      <div className="mb-8 border p-4 rounded-md">
        <p className="text-lg font-semibold mb-2">
          2. How would you rate your current level of social support?
        </p>
        <ul>
          {renderOption("A) Low", "a", "q2", 1)}
          {renderOption("B) Moderate", "b", "q2", 2)}
          {renderOption("C) High", "c", "q2", 3)}
        </ul>
      </div>

      {/* Question 3 */}
      <div className="mb-8 border p-4 rounded-md">
        <p className="text-lg font-semibold mb-2">
          3. How informed do you feel about mental health resources available at
          your school/online?
        </p>
        <ul>
          {renderOption("A) Not Informed", "a", "q3", 1)}
          {renderOption("B) Somewhat Informed", "b", "q3", 2)}
          {renderOption("C) Very Informed", "c", "q3", 3)}
        </ul>
      </div>

      {/* Question 4 */}
      <div className="mb-8 border p-4 rounded-md">
        <p className="text-lg font-semibold mb-2">
          4. How often do you engage in physical activity?
        </p>
        <ul>
          {renderOption("A) Rarely", "a", "q4", 1)}
          {renderOption("B) Occasionally", "b", "q4", 2)}
          {renderOption("C) Regularly", "c", "q4", 3)}
        </ul>
      </div>

      {/* Question 5 */}
      <div className="mb-8 border p-4 rounded-md">
        <p className="text-lg font-semibold mb-2">
          5. How would you describe your sleep quality?
        </p>
        <ul>
          {renderOption("A) Poor", "a", "q5", 1)}
          {renderOption("B) Fair", "b", "q5", 2)}
          {renderOption("C) Good", "c", "q5", 3)}
        </ul>
      </div>

      {/* Question 6 */}
      <div className="mb-8 border p-4 rounded-md">
        <p className="text-lg font-semibold mb-2">
          6. How often do you experience stress?
        </p>
        <ul>
          {renderOption("A) Rarely", "a", "q6", 1)}
          {renderOption("B) Occasionally", "b", "q6", 2)}
          {renderOption("C) Frequently", "c", "q6", 3)}
        </ul>
      </div>

      {/* Question 7 */}
      <div className="mb-8 border p-4 rounded-md">
        <p className="text-lg font-semibold mb-2">
          7. How often do you experience feelings of loneliness?
        </p>
        <ul>
          {renderOption("A) Rarely", "a", "q7", 1)}
          {renderOption("B) Occasionally", "b", "q7", 2)}
          {renderOption("C) Frequently", "c", "q7", 3)}
        </ul>
      </div>

      {/* Question 8 */}
      <div className="mb-8 border p-4 rounded-md">
        <p className="text-lg font-semibold mb-2">
          8. How satisfied are you with your personal relationships?
        </p>
        <ul>
          {renderOption("A) Dissatisfied", "a", "q8", 1)}
          {renderOption("B) Somewhat satisfied", "b", "q8", 2)}
          {renderOption("C) Very satisfied", "c", "q8", 3)}
        </ul>
      </div>

      {/* Question 9 */}
      <div className="mb-8 border p-4 rounded-md">
        <p className="text-lg font-semibold mb-2">
          9. How often do you experience feelings of hopelessness?
        </p>
        <ul>
          {renderOption("A) Rarely", "a", "q9", 1)}
          {renderOption("B) Occasionally", "b", "q9", 2)}
          {renderOption("C) Frequently", "c", "q9", 3)}
        </ul>
      </div>

      {/* Question 10 */}
      <div className="mb-8 border p-4 rounded-md">
        <p className="text-lg font-semibold mb-2">
          10. How often do you engage in activities that you enjoy?
        </p>
        <ul>
          {renderOption("A) Rarely", "a", "q10", 1)}
          {renderOption("B) Occasionally", "b", "q10", 2)}
          {renderOption("C) Frequently", "c", "q10", 3)}
        </ul>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {/* Report */}
      {showReport && (
        <div className="absolute inset-0 flex justify-center items-center text-center text-white">
          <div className="bg-black bg-opacity-70 p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">
              Your Mental Health Score: {score}/{maxScore}
            </h2>
            {score <= maxScore / 2 ? (
              <p>
                Your mental health score indicates potential concerns. It's
                essential to prioritize self-care and seek support from
                professionals. Consider reaching out to a healthcare provider or
                therapist for guidance and support tailored to your needs.
              </p>
            ) : (
              <p>
                Congratulations! Your mental health score suggests a positive
                outlook. It's essential to continue practicing self-care
                routines and maintaining healthy habits. Remember to prioritize
                your well-being and seek support if you ever feel overwhelmed.
                Keep up the good work!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
