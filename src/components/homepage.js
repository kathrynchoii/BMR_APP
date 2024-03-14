import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate
import './homepage.css'; // Import Home styles
import video from './videoOne.mp4'; // Import the video file

function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Wellness Watcher'; // Moved outside useEffect for scope accessibility

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80); // Adjust the typing speed from this interval

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="home">
      <video autoPlay muted loop id="video-background" className="video-background">
        <source src={video} type="video/mp4" />
      </video>
      <div className="text-container">{typedText}</div>
      {/* Conditional rendering for buttons */}
      {typedText === fullText && (
        <div className="buttons-container">
          <Link to="/BMI" className="btn">Calculate your BMI</Link>
          <Link to="/BMR" className="btn">Calculate your BMR</Link>
        </div>
      )}
    </div>
  );
}

export default Home;
