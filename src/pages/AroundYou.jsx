import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';

import {Error, Loader2, SongCard} from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const CountryTracks = () => {
    const [country, setCountry] = useState('');
    const {activeSong, isPlaying} = useSelector(state => state.player);

    const {data, isLoading, isError} = useGetSongsByCountryQuery(country);

    useEffect(() => {
        const getCountry = async () => {
            await axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_TESqXZMfkjDxIcQtySSxYt8gM4nZV')
                .then(res => {
                    setCountry(res?.data?.location?.country);
                })
                .catch(err => {
                    setError(true);
                }
            )
        };
        getCountry();
    }, []);

    if(isLoading && isError) return <Loader2 title="Loading Songs..." />;
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-between mt-4 mb-10'>
                <h1 className='text-2xl font-bold text-white'>Top 10 Songs around you</h1>
                <p className='text-md text-gray-200'>{country}</p>
            </div>
            <div className='flex flex-wrap justify-center gap-8'>
                {
                    data?.map((song, index) => {
                        return (
                            song.images?.coverart && song?.hub.actions &&
                                <SongCard
                                    key={song.key}
                                    song={song}
                                    activeSong={activeSong}
                                    isPlaying={isPlaying}
                                    data={data}
                                    index={index}
                            />
                        )
                })
                }
            </div>
        </div>
    )
};

export default CountryTracks;
