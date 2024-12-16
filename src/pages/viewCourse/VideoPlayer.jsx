import React, { useState } from "react";
import ReactPlayer from "react-player";
import video from "../../assets/video/videoplayback.mp4";

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const videoUrl = "https://youtu.be/NIkONVRvJzM?si=MYe9sB9hvRRxgI9-";
  return (
    <div className="h-[480px] lg:h-[420px] md:h-[280px] sm:h-[200px] w-full rounded-lg overflow-hidden">
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        controls
        playing={false}
      />
    </div>
  );
}

export default VideoPlayer;
