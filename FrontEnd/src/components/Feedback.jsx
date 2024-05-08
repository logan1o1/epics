import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FeedbackContainer = () => {
  const [username, setUsername] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [error, setError] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);
  const navigate = useNavigate();


  const fetchFeedbackData = async () => {
    try {
      const response = await fetch('https://behind-the-smiles.onrender.com/getFeedback');
      const data = await response.json();
      if (response.ok) {
        setFeedbackList(data);
      } else {
        setError('Failed to fetch feedback data.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch feedback data.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://behind-the-smiles.onrender.com/postFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, feedback: feedbackText }),
      });
      const data = await response.json();
      console.log(data);
      if (data) {
        console.log('Feedback submitted successfully!');
        setUsername('');
        setFeedbackText('');
      } else {
        console.log("no data")
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to submit feedback.');
    }
  };

  useEffect(() => {
    fetchFeedbackData();
  }, [handleSubmit]);

  return (
    <div className="flex border border-gray-300 rounded-lg overflow-hidden">
      <div className="w-1/2 pr-4 border-r border-gray-300">
        <div className="bg-cyan-100 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-cyan-800 mb-4">Feedback Form</h1>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-cyan-800">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-cyan-400 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="feedbackText" className="block text-cyan-800">Feedback:</label>
              <textarea
                id="feedbackText"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                className="w-full p-2 border border-cyan-400 rounded resize-none"
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>

      <div className="w-1/2">
        <div className="bg-cyan-100 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-cyan-800 mb-4">Feedbacks by users  </h1>
          <ul>
            {feedbackList.length > 0 ? (
              feedbackList.map((feedback, index) => (
                <li key={index} className="mb-2">
                  <strong>{feedback.username}:</strong> {feedback.feedback}
                </li>
              ))
            ) : (
              <li>No feedback available.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeedbackContainer;
