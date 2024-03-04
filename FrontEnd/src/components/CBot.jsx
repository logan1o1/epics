import React, { useState } from "react";
import NavBar from "./NavBar";

const CBot = () => {
  const [messages, setMessages] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [mentalHealthScore, setMentalHealthScore] = useState(null);

  const questions = [
    "How are you feeling today?",
    "Are you experiencing any specific challenges?",
    "Do you feel comfortable seeking professional help if needed?",
    "Have you lost interest in activities that you used to enjoy?",
    "Have you been feeling anxious or worried more than usual?",
    "Do you have a support system you can rely on during tough times?",
    "Have you had thoughts of self-harm or suicide?",
  ];

  const options = [
    ["Good", "Not So Good", "Unsure"],
    ["Yes", "No", "Unsure"],
    ["Yes", "No", "Unsure"],
    ["Yes", "No", "Unsure"],
    ["Yes", "No", "Unsure"],
    ["Yes", "No", "Unsure"],
    ["Yes", "No", "Unsure"],
  ];

  const handleUserAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateMentalHealthScore();
    }
    setMessages([
      ...messages,
      { answer: `${questions[currentQuestion]} - ${answer}` },
    ]);
  };

  const calculateMentalHealthScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      score += calculateQuestionScore(index, answer);
    });
    const normalizedScore = Math.ceil((score / (questions.length * 10)) * 5);
    setMentalHealthScore(normalizedScore);
  };

  const calculateQuestionScore = (index, answer) => {
    // Define scoring logic for each question
    switch (index) {
      case 0: // Feeling question
        return answer === "Good" ? 10 : answer === "Unsure" ? 5 : 0;
      case 1: // Challenges question
        return answer === "No" ? 10 : answer === "Unsure" ? 5 : 0;
      case 2: // Seeking help question
        return answer === "Yes" ? 10 : answer === "Unsure" ? 5 : 0;
      case 3: // Interest in activities question
        return answer === "No" ? 10 : answer === "Unsure" ? 5 : 0;
      case 4: // Anxiety question
        return answer === "No" ? 10 : answer === "Unsure" ? 5 : 0;
      case 5: // Support system question
        return answer === "Yes" ? 10 : answer === "Unsure" ? 5 : 0;
      case 6: // Self-harm or suicide question
        return answer === "No" ? 10 : answer === "Unsure" ? 5 : 0;
      default:
        return 0; // Default case, should not happen
    }
  };

  return (
    <div className="relative">
      <NavBar navbarMargin="11" />

      <section className="relative bg-image-section mt-20">
        <div className="bg-image-container relative">
          <img
            src="Images/SecBG.png"
            alt="Background"
            className="bg-image z-1"
          />

          <div className="flex justify-center items-center h-screen fixed top-0 left-0 right-0 bottom-0 z-20">
            <div className="p-8 bg-cyan-300 rounded-lg relative ">
              <h2 className="text-3xl font-bold mb-4">Our Chatbot</h2>

              {currentQuestion < questions.length && (
                <>
                  <p>{questions[currentQuestion]}</p>
                  <div className="flex gap-4 mt-2">
                    {options[currentQuestion].map((option, index) => (
                      <button
                        key={index}
                        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
                        onClick={() => handleUserAnswer(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {messages.map((msg, index) => (
                <div key={index} className="mb-2">
                  <strong>You:</strong> {msg.answer}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {mentalHealthScore !== null && (
        <div className="fixed bottom-4 right-4 bg-white rounded-md p-4 shadow-md">
          <p>Your mental health score: {mentalHealthScore} out of 5</p>
        </div>
      )}
    </div>
  );
};

export default CBot;

