import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {FiSearch} from 'react-icons/fi';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
  <form className="p-2 text-gray-400 focus-within:text-gray-600" autoComplete="off" onSubmit={handleSubmit}>
    <label htmlFor="search" className="sr-only">Search all Songs</label>
    <div className="flex flex-row justify-start items-center">
      <FiSearch className="w-5 h-5 ml-4 mr-4" />
      <input
        id="search"
        type="search"
        name="search"
        placeholder="Search all Songs"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full py-2 pl-2 text-white font-semibold bg-white/5 bg-opacity-80 backdrop-blur-sm rounded-md focus:outline-none focus:bg-white focus:text-gray-900 focus:bg-opacity-100"
      />
    </div>
  </form>
  )
};

export default Searchbar;
