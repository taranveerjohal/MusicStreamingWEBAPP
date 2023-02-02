import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import PlayPause from './PlayPause.jsx';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i, isPlaying, activeSong, data}) => {

  const dispatch = useDispatch();
  
  const handlePlay = () => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true));
  };

  const handlePause = () => {
    dispatch(playPause(false));
  };

  return(
    <div className="flex flex-col w-[250px] animate-slideup duration-500
     p-3 bg-white/5 cursor-pointer rounded-md ">
      <div className="relative w-full  group">
        <div className={`absolute inset-0 justify-center items-center bg-black
          bg-opacity-50 group-hover:flex 
          ${activeSong?.title === song.title? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause 
          song={song} 
          handlePause={handlePause}
          handlePlay={handlePlay}
          isPlaying={isPlaying}
          activeSong={activeSong}
          />
        </div>
        <img src={song.images?.coverart} alt={song.title} className='rounded-sm' />
      </div>
          <div className='flex flex-col '>
            <Link to={`/songs/${song?.key}`}>
            <p className="text-white font-semibold truncate text-lg">{song.title}</p>
            </Link>
            <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            <p className="text-white text-sm">{song.subtitle}</p>
            </Link>
      </div>
    </div>
  )
  };

export default SongCard;
