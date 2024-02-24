// Home.js
import React from 'react';
import './homepage.css'; // Import Home styles
import video from './videoOne.mp4'; // Import the video file

function Home() {
  return (
    <div className="home">
      <video autoPlay muted loop id="video-background" className="video-background">
          <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Home;