import React from 'react';
import './msg.scss';

const Message = () => {
  return (
    <div className='message'>
      <div className='container'>
        <span className='breacrumbs'>MESSAGE | JHON DOE</span>
        <div className='messages'>
          <div className='item'>
            <img src='/img/bb.jpg' alt='lk' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, at, officiis quibusdam magnam beatae nisi ipsam id,
              soluta iure assumenda illo ea. Quas doloremque, provident esse
              optio facere laboriosam veniam!
            </p>
          </div>

          <div className='item owner'>
            <img src='/img/bb.jpg' alt='lk' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, at, officiis quibusdam magnam beatae nisi ipsam id,
              soluta iure assumenda illo ea. Quas doloremque, provident esse
              optio facere laboriosam veniam!
            </p>
          </div>

          <div className='item'>
            <img src='/img/bb.jpg' alt='lk' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, at, officiis quibusdam magnam beatae nisi ipsam id,
              soluta iure assumenda illo ea. Quas doloremque, provident esse
              optio facere laboriosam veniam!
            </p>
          </div>

          <div className='item owner'>
            <img src='/img/bb.jpg' alt='lk' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, at, officiis quibusdam magnam beatae nisi ipsam id,
              soluta iure assumenda illo ea. Quas doloremque, provident esse
              optio facere laboriosam veniam!
            </p>
          </div>
        </div>
        <hr />
        <div className='write'>
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='write a message'
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
