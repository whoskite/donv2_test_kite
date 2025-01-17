import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from 'lucide-react'

interface AudioPlayerProps {
  audioSrc: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false); // Update 1: Initial state of isPlaying is now false
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      if (isPlaying) {
        audioRef.current.play().catch(error => { // Update 2: Improved error handling
          console.error("Playback failed:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src={audioSrc} loop />
      <Button
        variant="outline"
        size="icon"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="bg-black hover:bg-gray-800 text-white"
      >
        {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />} {/* Update 3: Button icon reflects initial state */}
      </Button>
    </div>
  );
};

export default AudioPlayer;

