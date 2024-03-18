import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import axios from 'axios';

// Frequently Asked Questions
const faqs = [
  {
    question: "How can I calculate my BMI?",
    answer: "You can calculate your BMI by using our BMI calculator tool located in the navigation menu."
  },
  {
    question: "What is a healthy diet?",
    answer: "A healthy diet includes a variety of fruits, vegetables, lean proteins, and whole grains."
  },
];

function Home() {
  const [typedText, setTypedText] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [faqVisible, setFaqVisible] = useState(true); // State to control FAQ visibility

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

  const toggleChat = () => {
    setChatOpen((prevChatOpen) => !prevChatOpen);
  };

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
    // Hide FAQ buttons when user starts typing
    setFaqVisible(false);
  };

  // Function to handle FAQ question click
  const handleFAQClick = (faq) => {
    setConversation([...conversation, { role: 'user', content: faq.question }, { role: 'bot', content: faq.answer }]);
    // Hide FAQ buttons when a FAQ is clicked
    setFaqVisible(false);
  };

  const sendMessage = async () => {
    if (!userMessage.trim()) return;
    console.log('Sending Message: ', userMessage);
    try {
      const response = await axios.post('/chat', { message: userMessage });
      if (response.data.choices && response.data.choices.length > 0) {
        const botMessage = response.data.choices[0].message.content;
        setConversation([...conversation, { role: 'user', content: userMessage }, { role: 'bot', content: botMessage }]);
      } else {
        console.error('Unexpected response structure:', response.data);
      }
      setUserMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="home">
      <video autoPlay muted loop id="video-background" className="video-background">
        <source src="/videoOne.mp4" type="video/mp4" />
      </video>
      <div className="text-container">{typedText}</div>
      {typedText === fullText && (
        <div className="buttons-container">
          <Link to="/BMI" className="btn">Calculate your BMI</Link>
          <Link to="/BMR" className="btn">Calculate your BMR</Link>
        </div>
      )}
      <button className="chatbot-button" onClick={toggleChat}>💬</button>
      <div className={`chatbot-window ${chatOpen ? 'chatbot-window-open' : ''}`}>
        <div className="chat-messages">
          {conversation.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              <strong>{msg.role === 'user' ? 'You:' : 'FitnessBot:'}</strong> {msg.content}
            </div>
          ))}
          {/* Render FAQ buttons only if faqVisible state is true */}
          {faqVisible && (
            <div className="faq-buttons">
              {faqs.map((faq, index) => (
                <button key={index} className="faq-btn" onClick={() => handleFAQClick(faq)}>
                  {faq.question}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="chat-input-area">
          <input
            type="text"
            className="chat-input"
            placeholder="Ask me anything health or fitness related..."
            value={userMessage}
            onChange={handleInputChange}
          />
          <button className="send-btn" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
