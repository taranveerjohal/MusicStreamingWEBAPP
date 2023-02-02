import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeaders2, Error, Loader, RelatedSongs } from '../components';
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';
import Loader2 from '../components/Loader2.jsx';

const ArtistDetails = () => {
    const { id : artistId } = useParams();
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const { data: artistData, isLoading: isFetchingArtistDetails , isError } = useGetArtistDetailsQuery(artistId);
   
    if(isFetchingArtistDetails) return <Loader2 title="Loading artist details..." />
    if(isError) return <Error />

    return (
        <div className='flex flex-col'>
            { <DetailsHeaders2 artistId={artistId} artistData={artistData} /> } 
            <RelatedSongs 
                data={Object.values(artistData.data)}
                // songData={songData}
                artistId={artistId}
            />
        </div>
    )
}

export default ArtistDetails;
