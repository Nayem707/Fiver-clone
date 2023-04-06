import React from 'react';
import './featured.scss';
const Featured = () => {
  return (
    <div className='featured'>
      <div className='container'>
        <div className='left'>
          <h1>
            Find the perfect <i> freelance </i>
            services for your business
          </h1>
          <div className='search'>
            <div className='searchInput'>
              <img
                src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png'
                alt=''
              />
              <input type='text' placeholder='Try "building mobile app"' />
            </div>
            <button>Search</button>
          </div>
          <div className='popular'>
            <span>Popular:</span>
            <button>Web Desgin</button>
            <button>Wordpress</button>
            <button>Logo Desgin</button>
            <button>AI Service</button>
          </div>
        </div>
        <div className='right'>
          <img src='./img/man.png' alt='imag' />
        </div>
      </div>
    </div>
  );
};

export default Featured;
