import { Link } from "react-router-dom";

const DetailsHeader = ({artistId, artistData, songData}) => {

  return(
  <div className="flex flex-col relative w-full">
    <div className="w-full bg-gradient-to-l rounded-lg from-transparent to-black/40 sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center justify-start" >
        <img alt="art" src={artistId 
        ? songData?.images?.coverart
        : artistData?.artists[artistId].attributes?.artwork?.url.replace('{w}', '500').replace('{h}', '500')}
        className="sm:w-48 w-28 sm:h-48 h-48 rounded-full mr-4 object-cover border-2" 
        />
        <div className="flex flex-col">
          <Link to={artistId ? `/artists/${artistId}` : '/top-artists'}>
            <h1 className="text-white font-semibold text-4xl">
              {artistId ? songData?.title : artistData?.artists[artistId].attributes?.name}
            </h1>
          </Link>
          <Link to={artistId ? `/artists/${artistId}` : '/top-artists'}>
            <p className="text-gray-500 text-md mt-5 font-semibold">
              {artistId ? songData?.subtitle : artistData?.artists[artistId].attributes?.genreNames}
            </p>
          </Link>
          <p className="text-gray-500 text-md font-semibold">
            {artistId 
            ? songData?.genres?.primary
            : artistData?.artists[artistId].attributes?.genreNames[0]
            }
          </p>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
  </div>  
 )
};

export default DetailsHeader;
