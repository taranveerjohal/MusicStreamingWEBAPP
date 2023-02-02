import { useNavigate } from "react-router-dom";

const ArtistCard = ({track}) => {
  const navigate = useNavigate()

  return(
      track.images?.coverart && track?.hub.actions &&
      <div className="flex flex-col w-[250px] p-4 bg-white/5
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
