// src/video-player/VideoPlayer.jsx
import React, { useRef, useState } from "react";
import "./VideoPlayerStyle.css";

function VideoPlayer() {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullScreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) { // Firefox
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) { // Chrome, Safari
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
      videoRef.current.msRequestFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="video-player-container">
      <h1>React Video Player</h1>
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="video"
          src="https://www.w3schools.com/html/mov_bbb.mp4" // Sample video
          controls={false}
        />
      </div>
      <div className="controls">
        <button onClick={togglePlayPause} className="control-button">
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={toggleMute} className="control-button">
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <button onClick={toggleFullScreen} className="control-button">
          {isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
