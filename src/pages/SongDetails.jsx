import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery, useGetArtistDetailsQuery } from '../redux/services/shazamCore';
import Loader2 from '../components/Loader2.jsx';

const SongDetails = () => {
    const { songid } = useParams();
    const dispatch = useDispatch();
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const {data: songData, isLoading: isFetchingSongDetails , isError } = useGetSongDetailsQuery(songid);
    const {data: isLoading, isError: RelatedSongserror} = useGetSongRelatedQuery(songid);
    const {data: artistData, isLoading: isFetchingArtistDetails , isError: artistError } = useGetArtistDetailsQuery(songData?.artists[0]?.adamid);

    if(isFetchingSongDetails) return <Loader2 title="Loading song details..." />
    if(isError) return <Error />
    if(isFetchingArtistDetails) return <Loader2 title="Loading artist details..." />
    if(artistError) return <Error />
    if(RelatedSongserror) return <Error />


    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({song, data, i}));
        dispatch(playPause(true));
    };

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };
    return (
        <div className='flex flex-col'>
            { <DetailsHeader artistId={songData?.artists[0]?.adamid} songData={songData} artistData={artistData} /> } 
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
        </div>
    )
}

export default SongDetails;
