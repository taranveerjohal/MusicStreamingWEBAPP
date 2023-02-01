import {FaPauseCircle, FaPlayCircle} from 'react-icons/fa';

const PlayPause = ({song, handlePause, handlePlay, isPlaying, activeSong}) => (
  (isPlaying && activeSong?.title === song.title) ? 
  ( <FaPauseCircle onClick={handlePause} size={35} className="text-4xl text-gray-300" /> ) 
  :( <FaPlayCircle onClick={handlePlay} size={35} className="text-4xl text-gray-300" /> )
);

export default PlayPause;
