import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode } from "swiper";
import 'swiper/css'
import 'swiper/css/free-mode'
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";
import { useGetTopChartQuery } from "../redux/services/shazamCore";
import { SongDetails } from "../pages";

const TopPlay = () => {

  useEffect(() => {
      divref.current.scrollIntoView({behavior: 'smooth'});
  });

  const {activeSong, isPlaying} = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const {data} = useGetTopChartQuery();
  const divref = useRef(null);

  const topPlays = data?.slice(0, 10);

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true));
  }; 

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const TopChartCard =({song, i, activeSong, isPlaying, handlePause, handlePlay}) => {
    return(
      <>
        {song.images?.background && song?.artists && song.hub?.actions &&
          <>
            <div className="w-full flex items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
              <h3 className="font-bold text-base text-white mr-4 left-0">{i ? i : + 1}</h3>
                <div className="flex flex-col w-full justify-start items-start ">
                  <div className="flex flex-row justify-between items-center">
                    <Link to={`/songs/${song?.key}`}>
                      <div className="flex flex-row items-center">
                        <img src={song?.images?.coverart} alt={song?.title} className="w-12 h-12 rounded-lg" />
                          <div className="flex flex-col ml-3">
                            <h3 className="font-bold text-base text-white">{song.subtitle}</h3>
                            <h3 className="font-normal text-sm text-gray-400">{song.title}</h3>
                          </div>
                       </div>
                    </Link>
                  </div>
                </div>
                <PlayPause 
                  song={song} 
                  handlePause={handlePause}
                  handlePlay={handlePlay}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  />
            </div>
          </>
        }
      </>
    )
  }

  return(
  <div ref={divref} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">
          Top Charts
        </h1>
          <Link to="/top-charts">
            <p className="text-white text-base cursor-pointer">See more</p>
          </Link>
      </div>
      <div className="flex flex-col justify-between items-center">
       {topPlays?.map((song, i) => (
        <>
         { song.images?.background && song?.artists &&
          <TopChartCard song={song} i={i ? i : null} key={song?.key} isPlaying={isPlaying} activeSong={activeSong} handlePause={() =>handlePauseClick(song, i)} handlePlay={() => handlePlayClick(song, i)} />}
        </>
        ))}
      </div>
    </div>
   <div className="mt-4 flex-col flex w-full">
    <div className="flex flex-row justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Top Artists
          </h1>
            <Link to="/top-artists">
              <p className="text-white text-base cursor-pointer">See more</p>
            </Link>
      </div>
      <Swiper slidesPerView="auto"
              freeMode={true}
              centeredSlides={true}
              centeredSlidesBounds={true}
              modules={[FreeMode]}
              className="mt-4"
      >
        {topPlays?.map((song, i) => (
         <>
          {  song.images?.coverart && song?.hub.actions &&
            <SwiperSlide key={song?.key} style={{width:'25%', height:'auto'}} className="shadow-lg rounded-full animate-slideright">
              <div>
                <Link to={`/artists/${song?.artists[0]?.adamid}`}>
                  <img src={song?.images?.background} alt="name" className="rounded-full w-full object-cover"/>
                </Link>
              </div>
            </SwiperSlide>
          }
         </>
        ))}
      </Swiper>
    </div>
  </div>
  )
};

export default TopPlay;
