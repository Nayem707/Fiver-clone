import React from 'react';
import './home.scss';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slider/Slide';
import CatCard from '../../components/catCard/catCard';
import { cards, project } from '../../data';
import { FaRegCheckCircle } from 'react-icons/fa';
import ProjectCard from '../../components/projectCard/ProjectCard';

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />

      {/* SLIDER */}
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => {
          return <CatCard item={card} key={card.id} />;
        })}
      </Slide>
      {/* *** */}

      <div className='features'>
        <div className='container'>
          <div className='item'>
            <h1>A whole world of freelance talent at your fingertips </h1>
            <div className='title'>
              <FaRegCheckCircle />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className='title'>
              <FaRegCheckCircle />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className='title'>
              <FaRegCheckCircle />
              Protected payments, every time
            </div>
            <p>
              Always know what youll pay upfront. Your payment isnt released
              until you approve the work.
            </p>
            <div className='title'>
              <FaRegCheckCircle />
              24/7 support
            </div>
            <p>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </div>
          <div className='item'>
            <img
              src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png'
              alt=''
            />
          </div>
        </div>
      </div>

      <div className='features dark'>
        <div className='container'>
          <div className='item'>
            <h1>Fiver business.</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className='title'>
              <FaRegCheckCircle />
              Connect to freelancers with proven business experience
            </div>
            <div className='title'>
              <FaRegCheckCircle />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className='title'>
              <FaRegCheckCircle />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Fiver Business</button>
          </div>
          <div className='item'>
            <img
              src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png'
              alt=''
            />
          </div>
        </div>
      </div>

      {/* SLIDER */}
      <Slide slidesToShow={4} arrowsScroll={4}>
        {project.map((card) => {
          return <ProjectCard item={card} key={card.id} />;
        })}
      </Slide>
      {/* *** */}
    </div>
  );
};

export default Home;
