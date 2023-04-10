import React from 'react';
import './footer.scss';
import {
  FaFacebook,
  FaGithub,
  FaGlobeAmericas,
  FaDollarSign,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaCannabis,
  FaCopyright,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='top'>
          <div className='item'>
            <h2>catagory 1</h2>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
          </div>

          <div className='item'>
            <h2>catagory 2</h2>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
          </div>
          <div className='item'>
            <h2>catagory 3</h2>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
          </div>
          <div className='item'>
            <h2>catagory 4</h2>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
          </div>
          <div className='item'>
            <h2>catagory 5</h2>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
            <span>graphics desgin</span>
          </div>
        </div>
        <hr />
        <div className='bottom'>
          <div className='left'>
            <h2>fiver</h2>
            <span>
              <FaCopyright className='icon' /> Fiver international ltd. 2023
            </span>
          </div>
          <div className='right'>
            <div className='social'>
              <FaFacebook className='icon' />
              <FaGithub className='icon' />
              <FaLinkedin className='icon' />
              <FaTwitter className='icon' />
              <FaYoutube className='icon' />
            </div>
            <div className='link'>
              <FaGlobeAmericas className='icon' />
              English
            </div>
            <div className='link'>
              <FaDollarSign className='icon' />
              USD
            </div>
            <FaCannabis className='icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
