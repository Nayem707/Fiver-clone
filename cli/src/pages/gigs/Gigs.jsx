import React, { useState } from 'react';
import './gigs.scss';
import { FaChevronDown } from 'react-icons/fa';

import { gigs } from '../../data';
import GigCard from '../../components/gigCard/GigCard';

const Gigs = () => {
  const [sort, setSort] = useState('salse');
  const [open, setOpen] = useState(false);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className='gigs'>
      <div className='container'>
        <span className='breadcrumbs'>FIVER | GRAPHICS & DESGIN</span>
        <h1>AI Artists</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='menu'>
          <div className='left'>
            <span>Budged</span>
            <input type='text' placeholder='min' />
            <input type='text' placeholder='max' />
            <button>Apply</button>
          </div>
          <div className='right'>
            <span className='sortBy'>sortBy :</span>
            <span className='sortType'>
              {sort === 'salse' ? 'Best selling' : 'Newst'}
            </span>
            <span className='icon' onClick={() => setOpen(!open)}>
              <FaChevronDown />
            </span>
            {open && (
              <div className='rightMenu'>
                {sort === 'salse' ? (
                  <span onClick={() => reSort('createdAt')}>newst</span>
                ) : (
                  <span onClick={() => reSort('salse')}>best selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className='cards'>
          {gigs.map((gig) => {
            return <GigCard key={gig.id} item={gig} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
