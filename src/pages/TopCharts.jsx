import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';

import {Error, Loader2, SongCard} from '../components';
import { useGetTopChartQuery } from '../redux/services/shazamCore';

const TopCharts = () => {
    const {activeSong, isPlaying} = useSelector(state => state.player);
    const {data, isLoading, isError} = useGetTopChartQuery();

    if(isLoading && isError) return <Loader2 title="Loading Songs..." />;
    if(isError) return <Error title="Error" message="Something went wrong" />;

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-between mt-4 mb-10'>
                <h1 className='text-2xl font-bold text-white'>Top Charts</h1>
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

export default TopCharts;
