import {useState, useEffect} from 'react';
import axios from 'axios';
import {Error, Loader2, ArtistCard} from '../components';
import { useGetTopChartQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
    const {data, isLoading, isError} = useGetTopChartQuery();

    if(isLoading && isError) return <Loader2 title="Loading Songs..." />;
    if(isError) return <Error title="Error" message="Something went wrong" />;

    return (
        <div className='flex flex-col'>
             <div className='flex flex-col items-center justify-between mt-4 mb-10'>
                <h1 className='text-2xl font-bold text-white'>Top Artists</h1>
            </div>
            <div className='flex flex-wrap justify-center gap-8'>
                {
                    data?.map((track) => {
                        return (
                            <ArtistCard
                                key={track.key}
                                track={track}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default TopArtists;
