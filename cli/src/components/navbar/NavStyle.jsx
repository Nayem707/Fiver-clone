import React, { useState } from 'react';
import './nav.scss';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GrLanguage } from 'react-icons/gr';
import Slide from '../slider/Slide';
import MenuLinks from './MenuLinks';

const menuLinks = [
  {
    menuPath: '/',
    menuName: 'Graphics & Design',
  },
  {
    menuPath: '/',
    menuName: 'Programming & Tech',
  },
  {
    menuPath: '/',
    menuName: 'Digital Marketing',
  },
  {
    menuPath: '/',
    menuName: 'Video & Animation',
  },
  {
    menuPath: '/',
    menuName: 'Writing & Translation',
  },
  {
    menuPath: '/',
    menuName: 'Music & Audio',
  },
  {
    menuPath: '/',
    menuName: 'Business',
  },
  {
    menuPath: '/',
    menuName: 'Finance',
  },
  {
    menuPath: '/',
    menuName: 'AI Services',
  },
  {
    menuPath: '/',
    menuName: 'Personal Growth',
  },
  {
    menuPath: '/',
    menuName: 'Consulting',
  },
  {
    menuPath: '/',
    menuName: 'Photography',
  },
];

const NavStyle = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    username: 'nayem',
    isSeller: false,
  });

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  // Toggle isSeller when button is clicked
  const toggleIsSeller = () => {
    setCurrentUser((prevUser) => ({
      ...prevUser,
      isSeller: !prevUser.isSeller,
    }));
  };

  return (
    <nav className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className='container'>
        {/* NAV LOGO HERE! */}
        <div className='nav_logo'>
          <Link to='/' className='logo_link'>
            <h1 className='logo_text'>
              fiverr<span className='logo_dot'>.</span>
            </h1>
          </Link>
        </div>
        {/* ** */}

        {active && (
          <div className='search'>
            <div className='searchInput'>
              <input
                type='text'
                placeholder='What service are you looking for today?"'
              />
              <button>
                <img
                  src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png'
                  alt=''
                />
              </button>
            </div>
          </div>
        )}

        {/* NAV LINKS HERE! */}
        <ul className={`navbar__links ${active ? 'active' : ''}`}>
          <li className='nav_item'>
            <a href='#link'>Fiver Business</a>
          </li>
          <li className='nav_item'>
            <a href='#link'>Explore</a>
          </li>
          <li className='nav_item'>
            <a href='#link' className='language'>
              <span>
                <GrLanguage size={15} className='icons' />
              </span>
              <span>English</span>
            </a>
          </li>

          {!currentUser?.isSeller && (
            <li className='nav_item' onClick={toggleIsSeller}>
              <a href='#'>Sign In</a>
            </li>
          )}

          {!currentUser?.isSeller && (
            <li className='nav_item' onClick={toggleIsSeller}>
              <a href='#'>Become a Seller</a>
            </li>
          )}
          {!currentUser && <button className='join_btn'>Join</button>}

          {currentUser && (
            <div className='user_dropdown' onClick={() => setOpen(!open)}>
              <img
                src='https://media.istockphoto.com/id/157681821/photo/anonymous-profile-young-man-silhouette.jpg?s=170667a&w=0&k=20&c=YjjZ1MkB6dNa6gYHhei2c9tn2Rc63wopgSVzuQPFJ38='
                alt=''
              />
              <li>{currentUser?.username}</li>

              {open && (
                <div className='options'>
                  {currentUser?.isSeller && (
                    <button className='buy-btn' onClick={toggleIsSeller}>
                      Switch to Buying
                    </button>
                  )}
                  {currentUser?.isSeller && (
                    <>
                      <Link className='link' to='/gigs'>
                        Gigs
                      </Link>
                      <Link className='link' to='/mygigs'>
                        My Gigs
                      </Link>
                      <Link className='link' to='/add'>
                        Add New Gig
                      </Link>
                    </>
                  )}

                  <Link className='link' to='/orders'>
                    Order
                  </Link>
                  <Link className='link' to='/messages'>
                    Message
                  </Link>
                  <Link className='link' to='#'>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </ul>

        {/* ** */}
      </div>

      {/* MENU LINKS HERE! */}

      {(active || pathname !== '/') && (
        <>
          <hr />
          <ul className='menu__links'>
            {menuLinks.map((item) => {
              return (
                <li className='menu__item' key={item.menuName}>
                  {item.menuName}
                </li>
              );
            })}
          </ul>
          <hr />
        </>
      )}

      {/* ** */}
    </nav>
  );
};

export default NavStyle;
