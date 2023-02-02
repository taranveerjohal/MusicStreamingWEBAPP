import { Link } from "react-router-dom";

const DetailsHeaders2 = ({artistId, artistData, songData}) => {
  return(
  <div className="flex flex-col relative w-full">
    <div className="w-full bg-gradient-to-l rounded-lg from-transparent to-black/40 sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center justify-start" >
        <img alt="art" src={artistId 
        ? artistData?.data[0]?.attributes?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
        : songData?.images?.coverart
      }
        className="sm:w-48 w-28 sm:h-48 h-48 rounded-full mr-4 object-cover border-2" 
        />
        <div className="flex flex-col">
          <Link to={artistId ? `/artists/${artistId}` : '/top-artists'}>
            <h1 className="text-white font-semibold text-4xl">
              {artistData?.data[0]?.attributes?.name
              }
            </h1>
          </Link>
          <Link to={artistId ? `/artists/${artistId}` : '/top-artists'}>
            <p className="text-gray-500 text-md mt-5 font-semibold">
              {artistData?.data[0]?.attributes?.genreNames
              }
            </p>
          </Link>
          <p className="text-gray-500 text-md font-semibold">
            {artistData?.data[0]?.attributes?.origin
            }
          </p>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
  </div>  
 )
};

export default DetailsHeaders2;
