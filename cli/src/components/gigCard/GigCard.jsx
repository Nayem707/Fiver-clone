import React from 'react';
import './gig.scss';
import { Link } from 'react-router-dom';
import { FaHeart, FaStar } from 'react-icons/fa';

const GigCard = ({ item }) => {
  return (
    <Link to='/gig/123' className='link'>
      <div className='gigCard'>
        <img src={item.img} alt='' />
        <div className='info'>
          <div className='user'>
            <img src={item.pp} alt='' />
            <span>{item.username}</span>
          </div>
          <div className='desc'>
            <p>{item.desc}</p>
          </div>
          <div className='star'>
            <span className='icons'>
              <FaStar className='icon' />
            </span>
            <span>{item.star}</span>
          </div>
        </div>

        <hr />

        <div className='details'>
          <span className='icons'>
            <FaHeart className='icon' />
          </span>
          <div className='price'>
            <span>Starting</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
