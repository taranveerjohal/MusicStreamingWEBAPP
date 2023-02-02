import SongBar from './SongBar.jsx';

const RelatedSongs = ({
  data,
  activeSong,
  isPlaying,
  handlePause,
  handlePlay,
}) => {
  return(
    <div className='flex flex-col'>
      <h2 className='text-white text-3xl font-bold' >Related Songs:</h2>
      <div className='mt-5'>
        {data?.map((song, i) => (
          <SongBar
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePause}
            handlePlayClick={handlePlay}
          />
        ))}
      </div>
    </div> 
  )
};

export default RelatedSongs;
