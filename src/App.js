import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import ResponsiveWrapper from './components/ResponsiveWrapper';

function App() {
  return (
    <div className="App">
      <h1>Responsive YouTube Video Player</h1>
      <ResponsiveWrapper>
        <VideoPlayer  videoId= "NRP53Mtn5gI" />
      </ResponsiveWrapper>
    </div>
  );
}

export default App;
