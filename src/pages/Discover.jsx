import {Error, Loader, SongCard } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { genres } from '../assets/constants';
import {useGetTopChartQuery, useGetGenreListQuery} from '../redux/services/shazamCore';
import { FaHubspot } from 'react-icons/fa';
import { HiBackspace } from 'react-icons/hi';
import Loader2 from '../components/Loader2.jsx';
import { selectGenreListId } from '../redux/features/playerSlice';

const Discover = () => 
{
    const dispatch = useDispatch();
    const { isPlaying, activeSong, genreListId} = useSelector((state) => state.player);
    const {data, error, isFetching} = useGetGenreListQuery(genreListId || "POP");
    const genreTitle = genres.find((genre) => genre.value === genreListId)?.title;
    
    if(isFetching) return <Loader2 title="loading songs..." />
    if(error) return <Error title="Error loading songs" />

    return (
        <div className="flex flex-col">
            <div className='w-full flex flex-col sm:flex-row justify-between items-center mt-4 mb-10'>
                <h2 className='font-bold text-3xl text-left text-white'>Discover {genreTitle}</h2>
                <select onChange={(e)=>dispatch(selectGenreListId(e.target.value))} value={genreListId} className='bg-black text-gray-300 p-3 rounded-lg text-sm outline-none sm:mt-0 mt-5' >
                    {genres.map((genre) => (
                        <option key={genre.value} value={genre.value} >{genre.title}</option>
                    ))}
                </select>
            </div>
            <div className='flex flex-wrap gap-5 sm:justify-center justify-center'>
                {data.map((song, i) => (
                    song.images?.coverart && song?.hub.actions &&
                    <SongCard
                     key={song.key} 
                     song={song} 
                     i={i} 
                     isPlaying={isPlaying} 
                     activeSong={activeSong} 
                     data={data} 
                     /> 
                ))}
            </div>
        </div>
    )
}

export default Discover;
