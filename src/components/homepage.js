import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import video from './videoOne.mp4';

function Home() {
  const [typedText, setTypedText] = useState('');
  const [chatOpen, setChatOpen] = useState(false); // State to control chat window visibility
  const fullText = 'Wellness Watcher';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Function to toggle chat window
  const toggleChat = () => setChatOpen(!chatOpen);

  return (
    <div className="home">
      <video autoPlay muted loop id="video-background" className="video-background">
        <source src={video} type="video/mp4" />
      </video>
      <div className="text-container">{typedText}</div>
      {typedText === fullText && (
        <div className="buttons-container">
          <Link to="/BMI" className="btn">Calculate your BMI</Link>
          <Link to="/BMR" className="btn">Calculate your BMR</Link>
        </div>
      )}
      {/* Chatbot Button */}
      <button className="chatbot-button" onClick={toggleChat}>
        💬
      </button>
      {/* Chatbot Window */}
      <div className={`chatbot-window ${chatOpen ? 'chatbot-window-open' : ''}`}>
        <div className="chat-messages">
          {/* Chat messages will go here */}
        </div>
        <div className="chat-input-area">
          <input type="text" className="chat-input" placeholder="Ask me anything..." />
        </div>
      </div>
    </div>
  );
}

export default Home;
