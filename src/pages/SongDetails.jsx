import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
    const { songid } = useParams();
    const dispatch = useDispatch();
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const { data: songData, isLoading: isFetchingSongDetails , isError } = useGetSongDetailsQuery(songid);
    const {data, isLoading, isError: RelatedSongserror} = useGetSongRelatedQuery(songid);

    if(isFetchingSongDetails || isLoading) return <Loader title="Loading song details..." />
    if(isError || RelatedSongserror) return <Error />

    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({song, data, i}));
        dispatch(playPause(true));
    };

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    return (
        <div className='flex flex-col'>
            { <DetailsHeader artistId={songData?.artists[0]?.id} songData={songData} artistData={songData?.artitstData} /> } 
            <div className='mb-10'>
                <h2 className='text-white text-3xl font-bold' >Lyrics:</h2>
                <div className='mt-5'>
                    {songData?.sections[1]?.type === 'LYRICS'?
                        songData?.sections[1]?.text.map((line, i) => (
                            <p key={i} className='text-gray-400 text-base my-1 ml-2'>{line}</p>
                        ))
                        :
                        <p className='text-white text-lg'>Sorry, No lyrics found</p>
                    }               
                </div>
            </div>
            <RelatedSongs 
                data={data}
                activeSong={activeSong}
                isPlaying={isPlaying}
                handlePause={handlePauseClick}
                handlePlay={handlePlayClick}
            />
        </div>
    )
}

export default SongDetails;
