import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import {Error, Loader2, SongCard} from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';

const Search = () => {
    const {activeSong, isPlaying} = useSelector(state => state.player);
    const {searchTerm} = useParams();
    const {data, isLoading, isError} = useGetSongsBySearchQuery(searchTerm);

    const songs = data?.tracks?.hits?.map((song) => song.track);

    if(isLoading && isError) return <Loader2 title="Loading Songs..." />;
    if(isError) return <Error title="Error" message="Something went wrong" />;

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-between mt-4 mb-10'>
                <h1 className='text-2xl font-bold text-white'>
                    Showing Search Results for <span className="font-black">{searchTerm}</span>
                </h1>
            </div>
            <div className='flex flex-wrap justify-center gap-8'>
                {
                    songs?.map((song, index) => {
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

export default Search;
