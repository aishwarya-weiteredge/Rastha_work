import React from 'react';
import { ImSearch } from 'react-icons/im';

const Searchbar = ({props}) => {
  const placeholderStyle = {
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '15px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: 'gray', // Set the color you prefer
  };

  return (
    <>
      <div className='flex items-center rounded-md bg-gray-200 mt-6 px-2 py-2 mx-2'>
        <input
          type={'search'}
          placeholder={props}
          className='text-base bg-transparent w-full text-primary focus:outline-none'
          style={placeholderStyle}
        />
        <ImSearch className='text-black text-lg cursor-pointer mx-2' />
      </div>
    </>
  );
};

export default Searchbar;
