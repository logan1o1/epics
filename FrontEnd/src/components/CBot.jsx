import React, { useState } from 'react';
import NavBar from "./NavBar";

const CBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', message: 'Hello! I\'m here to help. Feel free to ask anything.' },
  ]);

  const handleUserMessage = (userMessage) => {
    const botResponse = `You said: ${userMessage}. I'm just a demo chatbot.`;
    setMessages([...messages, { sender: 'user', message: userMessage }, { sender: 'bot', message: botResponse }]);
  };

  return (
    <div className="relative">
      <NavBar navbarMargin="11" />
      
      <section className="relative bg-image-section mt-20">
        <div className="bg-image-container relative">
          <img src="Images/SecBG.png" alt="Background" className="bg-image z-1" />

          {/* Chatbot Container */}
          <div className="flex justify-center items-center h-screen fixed top-0 left-0 right-0 bottom-0 z-20">
            <div className="p-8 bg-cyan-300 rounded-lg relative ">
              <h2 className="text-3xl font-bold mb-4">Our Chatbot</h2>

              <div className="mb-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`text-${msg.sender === 'user' ? 'blue' : 'green'}-600 mb-2`}>
                    <strong>{msg.sender === 'user' ? 'You:' : 'Bot:'}</strong> {msg.message}
                  </div>
                ))}
              </div>

              <div className="flex">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-grow p-2 border rounded"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleUserMessage(e.target.value);
                      e.target.value = '';
                    }
                  }}
                />
                <button
                  className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => {
                    const input = document.querySelector('input');
                    if (input) {
                      handleUserMessage(input.value);
                      input.value = '';
                    }
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CBot;
