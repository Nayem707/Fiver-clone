import React from 'react';
import './msgs.scss';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

const msg = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dolorum voluptatibus earum tempore libero, praesentium molestias, quidem hic error facilis perspiciatis rerum laboriosam voluptates est placeat voluptate ipsa saepe debitis!`;
const Messages = () => {
  return (
    <div className='messages'>
      <div className='container'>
        <div className='title'>
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>jhon doe</td>
            <td>
              <Link to='/message/123' className='link'>
                {msg.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className='active'>
            <td>jhon doe</td>
            <td>
              <Link to='/message/123' className='link'>
                {msg.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>jhon doe</td>
            <td>
              <Link to='/message/123' className='link'>
                {msg.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>jhon doe</td>
            <td>
              <Link to='/message/123' className='link'>
                {msg.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
