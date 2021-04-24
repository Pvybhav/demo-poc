import React from 'react';
import LoadingIcon from '../../assets/loader1.gif';
import './Loader.css';

const Loader = () => {
  return (
    <div style={{ backgroundColor: 'white', width: '100%', height: '100vh' }}>
      <img
        className='loader-icon'
        width='500'
        src={LoadingIcon}
        alt='Loading...'
      />
    </div>
  );
};

export default Loader;
