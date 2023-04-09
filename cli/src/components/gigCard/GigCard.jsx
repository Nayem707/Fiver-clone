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
            <p>{item.desc}</p>
            <div className='star'>
              <span className='icon'>
                <FaStar />
              </span>
              <span>{item.star}</span>
            </div>
          </div>
        </div>

        <hr />

        <div className='details'>
          <span className='icon'>
            <FaHeart />
          </span>
          <div className='price'>
            <span>starting</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
