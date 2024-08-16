import React, { useState, useRef } from 'react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = Number(e.target.value);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="music-player bg-gradient-to-r from-[#006a4e] to-[#188f00] dark:from-[#064e3b] dark:to-[#14532d] text-white p-4 my-10 rounded-2xl mx-auto ">
        <h1 className="text-xl rounded-t-2xl px-10 text-white font-semibold bg-gradient-to-r from-[#006a4e] to-[#188f00] dark:from-[#064e3b] dark:to-[#14532d]">
            Bangladesh National Anthem
          </h1>
      <audio
        ref={audioRef}
        src="/bd_national_anthem.mp3"  
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      ></audio>

      <div className="controls flex items-center justify-between mt-4">
        <button 
          className="bg-red-600 px-4 py-2 rounded-xl hover:bg-red-500 transition-colors"
          onClick={togglePlayPause}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        <div className="progress flex-1 mx-4">
          <input
            type="range"
            value={currentTime}
            max={duration}
            onChange={handleProgressChange}
            className="w-full"
          />
        </div>

        <div className="time text-sm">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
