import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from 'react';

const ArtistCard = ({track}) => {
  const navigate = useNavigate()
  useEffect(() => {
    divref.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  });
  const divref = useRef(null);
  return(
      track.images?.coverart && track?.hub.actions &&
      <div ref={divref} className="flex flex-col w-[250px] p-4 bg-white/5
       bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer" onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}>
        <img src={track?.images?.coverart} alt={track?.title} className="w-full h-56 rounded-lg" />
        <div className="flex flex-col justify-between mt-2">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-white">{track?.title}</h1>
            <p className="text-sm text-gray-200">{track?.subtitle}</p>
          </div>
      </div>
    </div>
  )
};

export default ArtistCard;
