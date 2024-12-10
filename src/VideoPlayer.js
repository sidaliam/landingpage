import React from "react";
import "./VideoPlayer.css";
import videoatrox from "./images/ca865fed-f847-4474-a771-73bf04661fc5.mp4"; // Remplacez par le chemin correct

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video className="custom-video" src={videoatrox} controls></video>
    </div>
  );
};

export default VideoPlayer;
