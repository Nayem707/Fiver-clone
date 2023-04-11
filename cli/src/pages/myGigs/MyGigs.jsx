import React from 'react';
import './mygigs.scss';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const MyGigs = () => {
  return (
    <div className='myGigs'>
      <div className='container'>
        <div className='title'>
          <h1>Gigs</h1>
          <Link className='link' to='/add'>
            <button>Add New Gigs</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Img</th>
            <th>Title</th>
            <th>Price</th>
            <th>Slase</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU'
                alt=''
              />
            </td>
            <td>Gig1</td>
            <td>99</td>
            <td>123</td>
            <td>
              <span>
                <FaTrashAlt className='icon' />
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
            <td>99</td>
            <td>123</td>
            <td>
              <span>
                <FaTrashAlt className='icon' />
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
            <td>99</td>
            <td>123</td>
            <td>
              <span>
                <FaTrashAlt className='icon' />
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
