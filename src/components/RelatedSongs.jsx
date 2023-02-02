import SongBar from './SongBar.jsx';
import {useDispatch} from 'react-redux';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const RelatedSongs = ({
  data,
  activeSong,
  isPlaying,
}) => {
  const dispatch = useDispatch();

  const handlePlay = (song, i) => {
    console.log(song, i)
    dispatch(setActiveSong({song, i}));
    dispatch(playPause(true));
  };

  const handlePause = () => {
    dispatch(playPause(false));
  };
  return(
    <div className='flex flex-col'>
      <h2 className='text-white text-3xl font-bold' >Related Songs:</h2>
      <div className='mt-5'>
        {data?.map((song, i) => (
          <SongBar
            key={song.id}
            song={song.views}
            artistId={song.id}
            songData={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePlay={() => handlePlay(data, i)}
            handlePause={() => handlePause()}
          />
        ))}
      </div>
    </div> 
  )
};

export default RelatedSongs;
