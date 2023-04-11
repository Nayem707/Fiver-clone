import React, { useState } from 'react';
import './nav.scss';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavStyle = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
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

  const currentUser = {
    id: 1,
    username: 'nayem ',
    isSeller: true,
  };

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className='container'>
        {/* NAV LOGO HERE! */}
        <div className='logo'>
          <Link to='/' className='link'>
            <h1 className='text'>
              fiverr<span className='dot'>.</span>
            </h1>
          </Link>
        </div>
        {/* ** */}

        {/* NAV LINKS HERE! */}
        <div className='links'>
          <span>Fiver Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Become s Seller</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className='user' onClick={() => setOpen(!open)}>
              <img
                src='https://media.istockphoto.com/id/157681821/photo/anonymous-profile-young-man-silhouette.jpg?s=170667a&w=0&k=20&c=YjjZ1MkB6dNa6gYHhei2c9tn2Rc63wopgSVzuQPFJ38='
                alt=''
              />
              <span>{currentUser?.username}</span>

              {open && (
                <div className='options'>
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
                  <Link className='link' to='/logout'>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
        {/* ** */}
      </div>

      {/* MENU LINKS HERE! */}
      {(active || pathname !== '/') && (
        <>
          <hr />
          <div className='menu'>
            <Link className='link' to='/'>
              Writing & translating
            </Link>
            <Link className='link' to='/'>
              AI Service
            </Link>
            <Link className='link' to='/'>
              Digital Marketing
            </Link>
            <Link className='link' to='/'>
              Music & Audio
            </Link>
            <Link className='link' to='/'>
              Programing & Tech
            </Link>
            <Link className='link' to='/'>
              Business
            </Link>
          </div>
          <hr />
        </>
      )}

      {/* ** */}
    </div>
  );
};

export default NavStyle;
{
  /* NAV LINKS HERE! */
}
{
  /* ** */
}
