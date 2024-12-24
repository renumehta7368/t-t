import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        {/* Search Input */}
        <input
          className='flex-1 outline-none bg-inherit text-sm'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder='Search'
        />
        {/* Search Icon */}
        <span className="material-icons w-4 text-gray-600">search</span>
      </div>
      {/* Close Icon */}
      <span
        onClick={() => setShowSearch(false)}
        className="material-icons w-3 cursor-pointer text-gray-600"
      >
        close
      </span>
    </div>
  ) : null;
};

export default SearchBar;
