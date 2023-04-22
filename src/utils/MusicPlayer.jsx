import React, { useState, useRef, useEffect } from "react";
import musicFile from "../images/eym.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.play();
    setIsPlaying(true);
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = () => {
    if (isPlaying) {
      audioRef.current.pause();
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    if (isMuted) {
      audioRef.current.volume = volume;
    } else {
      audioRef.current.volume = 0;
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    setIsMuted(newVolume === "0");
  };

  return (
    <div
      className={`fixed bottom-4 left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md`}
    >
      <div className={`flex items-center`}>
        <audio ref={audioRef} src={musicFile} autoPlay={true} />
        <button className="focus:outline-none" onClick={handlePlayPause}>
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} className="text-xl" />
          ) : (
            <FontAwesomeIcon icon={faPlay} className="text-xl" />
          )}
        </button>
        <div className="ml-4">
          <div className="text-sm font-semibold text-custom-100">
            Ease Your Mind
          </div>
          <div className="text-xs text-gray-500">GRiZ x Ganja White Night</div>
        </div>

        <button className="ml-4 focus:outline-none" onClick={handleMuteToggle}>
          {isMuted ? (
            <FontAwesomeIcon icon={faVolumeMute} className="text-xl" />
          ) : (
            <FontAwesomeIcon icon={faVolumeUp} className="text-xl" />
          )}
        </button>
        <input
          className="appearance-none w-12 h-1 ml-2 bg-gray-300 rounded-lg focus:outline-none"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          onMouseUp={() => {
            if (audioRef.current) {
              audioRef.current.volume = volume;
            }
          }}
          onTouchEnd={() => {
            if (audioRef.current) {
              audioRef.current.volume = volume;
            }
          }}
          style={{
            background: `linear-gradient(to right, #4299e1 0%, #B12F42 ${
              volume * 100
            }%, #d1d5db ${volume * 100}%, #d1d5db 100%)`,
            width: "75px", // increase the width of the slider track
          }}
        />
      </div>
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 15px;
          height: 16px;
          border-radius: 50%;
          background: #b12f42;
          cursor: pointer;
          margin-top: -2px;
          margin-left: 0px;
        }
        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #b12f42;
          cursor: pointer;
          margin-top: -7.5px;
          margin-left: 0px;
        }
        input[type="range"] {
          margin-top: 3px;
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;
