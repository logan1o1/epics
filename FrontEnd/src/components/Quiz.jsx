import React, { useState } from "react";

const Quiz = () => {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const renderOption = (label, value, question) => (
    <li key={value}>
      <label>
        <input
          type="radio"
          name={question}
          value={value}
          onChange={() => handleAnswer(question, value)}
        />
        {label}
      </label>
    </li>
  );

  const handleSubmit = () => {
    // Implement logic to handle submitted answers
    console.log("Submitted Answers:", answers);
  };

  return (
    <div className="container mx-auto mt-24 bg-cyan-100 p-8 rounded-md">
      <h1 className="text-4xl font-bold text-center mb-8 text-cyan-500">Quiz</h1>

      {/* Question 1 */}
      <div className="mb-8 border p-4 rounded-md">
        <p className="text-lg font-semibold mb-2">1. Do you feel that social media has a positive or negative impact on your mental health?</p>
        <ul>
          {renderOption("A) Positive", "a", "q1")}
          {renderOption("B) Neutral", "b", "q1")}
          {renderOption("C) Negative", "c", "q1")}
        </ul>
      </div>

      {/* Question 2 */}
      <div className="mb-8 border p-4 rounded-md">
        <p className="text-lg font-semibold mb-2">2. How would you rate your current level of social support?</p>
        <ul>
          {renderOption("A) Low", "a", "q2")}
          {renderOption("B) Moderate", "b", "q2")}
          {renderOption("C) High", "c", "q2")}
        </ul>
      </div>

      {/* Question 3 */}
      <div className="mb-8 border p-4 rounded-md">
        <p className="text-lg font-semibold mb-2">3. How informed do you feel about mental health resources available at your school/online?</p>
        <ul>
          {renderOption("A) Not Informed", "a", "q3")}
          {renderOption("B) Somewhat Informed", "b", "q3")}
          {renderOption("C) Very Informed", "c", "q3")}
        </ul>
      </div>

      {/* Add more questions in a similar format */}

      {/* Submit Button */}
      <div className="text-center">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
