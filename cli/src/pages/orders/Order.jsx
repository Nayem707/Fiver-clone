import React from 'react';
import './order.scss';

import { FaEnvelope } from 'react-icons/fa';

const Order = () => {
  const currentUser = {
    id: 1,
    username: 'nayem ',
    isSeller: true,
  };

  return (
    <div className='order'>
      <div className='container'>
        <div className='title'>
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU'
                alt=''
              />
            </td>
            <td>Gig1</td>
            <td>15</td>
            <td>123</td>
            <td>
              <span>
                <FaEnvelope className='icon' />
              </span>
            </td>
          </tr>

          <tr>
            <td>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU'
                alt=''
              />
            </td>
            <td>Gig1</td>
            <td>15</td>
            <td>123</td>
            <td>
              <span>
                <FaEnvelope className='icon' />
              </span>
            </td>
          </tr>

          <tr>
            <td>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU'
                alt=''
              />
            </td>
            <td>Gig1</td>
            <td>15</td>
            <td>123</td>
            <td>
              <span>
                <FaEnvelope className='icon' />
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Order;
