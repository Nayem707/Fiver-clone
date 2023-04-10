import React from 'react';
import './gig.scss';
import { FaStar } from 'react-icons/fa';
import Slider from 'infinite-react-carousel';
import {
  FaCheckCircle,
  FaRegClock,
  FaRedoAlt,
  FaThumbsDown,
  FaThumbsUp,
} from 'react-icons/fa';

const Gig = () => {
  return (
    <div className='gig'>
      <div className='container'>
        <div className='left'>
          <span className='breadCrumbs'>FIVER | GRAPHICS & DESGIN</span>
          <h1>i will create ai generated art for you</h1>

          <div className='user'>
            <img
              className='pp'
              src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
              alt=''
            />
            <span>nayem islam</span>
            <div className='stars'>
              <FaStar className='icon' />
              <FaStar className='icon' />
              <FaStar className='icon' />
              <FaStar className='icon' />
              <FaStar className='icon' />
              <span>5</span>
            </div>
          </div>

          <Slider className='slider' slidesToshow={1} arrowsScroll={1}>
            <img
              src='https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
              alt=''
            />
            <img
              src='https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
              alt=''
            />
            <img
              src='https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
              alt=''
            />
          </Slider>

          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p>
            adipisicing elit. Ea id quos quasi error officia eius ipsa!
            Aspernatur, fuga ullam. Recusandae architecto inventore fuga minus
            aliquam eos distinctio omnis necessitatibus saepe. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Quos ea cumque sequi,
            officiis magnam eos ipsam delectus, iure voluptatem unde
            accusantium, quis sapiente quasi sed modi quod ullam alias nostrum.
          </p>

          <div className='seller'>
            <h2>About The Seller</h2>
            <div className='user'>
              <img
                src='https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                alt=''
              />

              <div className='info'>
                <span>Nayem islam</span>

                <div className='stars'>
                  <FaStar className='icon' />
                  <FaStar className='icon' />
                  <FaStar className='icon' />
                  <FaStar className='icon' />
                  <FaStar className='icon' />
                  <span>5</span>
                </div>
                <button>Contact me</button>
              </div>
            </div>

            <div className='box'>
              <div className='items'>
                <div className='item'>
                  <span className='title'>From</span>
                  <span className='desc'>BD</span>
                </div>

                <div className='item'>
                  <span className='title'>Member since</span>
                  <span className='desc'>Agust 2022</span>
                </div>

                <div className='item'>
                  <span className='title'>Avg. response time</span>
                  <span className='desc'>4 hours</span>
                </div>

                <div className='item'>
                  <span className='title'>Last delivery</span>
                  <span className='desc'>1 day</span>
                </div>

                <div className='item'>
                  <span className='title'>Languages</span>
                  <span className='desc'>English</span>
                </div>
              </div>

              <hr />

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                animi maxime nobis culpa soluta, iure sapiente nemo quia
                perferendis obcaecati. Dolorum assumenda unde quis, nulla maxime
                harum magni reiciendis voluptatem!
              </p>
            </div>
          </div>

          <div className='reviews'>
            <h2>Reviews</h2>

            <div className='item'>
              <div className='user'>
                <img
                  className='pp'
                  src='https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                  alt=''
                />
                <div className='info'>
                  <span>Nayem islam</span>
                  <div className='country'>
                    <img
                      src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1ea.png'
                      alt=''
                    />
                    <span>Ireland </span>
                  </div>
                </div>
              </div>

              <div className='stars'>
                <FaStar className='icon' />
                <FaStar className='icon' />
                <FaStar className='icon' />
                <FaStar className='icon' />
                <FaStar className='icon' />
                <span className='icon'>5 </span> | 1 month ago
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                minima non, ea quo tempore eveniet adipisci iusto voluptatem,
                sapiente culpa laudantium neque reiciendis ducimus possimus
                velit quaerat quae consectetur cupiditate. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Officiis maxime voluptates
                corporis tempora dignissimos culpa .
              </p>

              <div className='help'>
                <span className='text'>Helpful?</span>
                <FaThumbsUp className='icon' />
                <span>Yes</span>
                <FaThumbsDown className='icon' />
                <span>No</span>
              </div>
              <hr />
            </div>

            <div className='item'>
              <div className='user'>
                <img
                  className='pp'
                  src='https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                  alt=''
                />
                <div className='info'>
                  <span>Nayem islam</span>
                  <div className='country'>
                    <img
                      src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1ea.png'
                      alt=''
                    />
                    <span>Ireland </span>
                  </div>
                </div>
              </div>

              <div className='stars'>
                <FaStar className='icon' />
                <FaStar className='icon' />
                <FaStar className='icon' />
                <FaStar className='icon' />
                <FaStar className='icon' />
                <span className='icon'>5 </span> | 1 month ago
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                minima non, ea quo tempore eveniet adipisci iusto voluptatem,
                sapiente culpa laudantium neque reiciendis ducimus possimus
                velit quaerat quae consectetur cupiditate. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Officiis maxime voluptates
                corporis tempora dignissimos culpa .
              </p>

              <div className='help'>
                <span className='text'>Helpful?</span>
                <FaThumbsUp className='icon' />
                <span>Yes</span>
                <FaThumbsDown className='icon' />
                <span>No</span>
              </div>
              <hr />
            </div>

            <div className='item'>
              <div className='user'>
                <img
                  className='pp'
                  src='https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                  alt=''
                />
                <div className='info'>
                  <span>Nayem islam</span>
                  <div className='country'>
                    <img
                      src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1ea.png'
                      alt=''
                    />
                    <span>Ireland </span>
                  </div>
                </div>
              </div>

              <div className='stars'>
                <FaStar className='icon' />
                <FaStar className='icon' />
                <FaStar className='icon' />
                <FaStar className='icon' />
                <FaStar className='icon' />
                <span className='icon'>5 </span> | 1 month ago
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                minima non, ea quo tempore eveniet adipisci iusto voluptatem,
                sapiente culpa laudantium neque reiciendis ducimus possimus
                velit quaerat quae consectetur cupiditate. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Officiis maxime voluptates
                corporis tempora dignissimos culpa .
              </p>

              <div className='help'>
                <span className='text'>Helpful?</span>
                <FaThumbsUp className='icon' />
                <span>Yes</span>
                <FaThumbsDown className='icon' />
                <span>No</span>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className='right'>
          <div className='price'>
            <h3>1 AI generated image</h3>
            <h2>$ 52.88</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, placeat!
          </p>
          <div className='delevery'>
            <div className='item'>
              <FaRegClock /> <span>2 days delivery</span>
            </div>
            <div className='item'>
              <FaRedoAlt /> <span>3 Revison</span>
            </div>
          </div>
          <div className='details'>
            <div className='feature'>
              <div className='item'>
                <span className='icon'>
                  <FaCheckCircle />
                </span>
                <span>Prompt Writing</span>
              </div>
              <div className='item'>
                <span className='icon'>
                  <FaCheckCircle />
                </span>
                <span>Prompt Writing</span>
              </div>
              <div className='item'>
                <span className='icon'>
                  <FaCheckCircle />
                </span>
                <span>Prompt Writing</span>
              </div>
              <div className='item'>
                <span className='icon'>
                  <FaCheckCircle />
                </span>
                <span>Prompt Writing</span>
              </div>
            </div>
          </div>
          <button>Contienu</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
