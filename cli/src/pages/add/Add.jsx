import React from 'react';
import './add.scss';

const Add = () => {
  return (
    <div className='add'>
      <div className='container'>
        <h1>Add New Gig</h1>

        <div className='sections'>
          <div className='left'>
            <label htmlFor='text'>Title</label>
            <input type='text' placeholder='bla bla' />
            <label htmlFor='text'>Catagory</label>
            <select name='cats' id='cats'>
              <option value='desgin'>Desgin</option>
              <option value='web'>web dev</option>
              <option value='anim'>anim</option>
              <option value='music'>music</option>
            </select>
            <label htmlFor='text'>Cover img</label>
            <input type='file' />
            <label htmlFor='text'>Upload img</label>
            <input type='file' multiple />

            <label htmlFor='text'>desc</label>
            <textarea
              name=''
              id=''
              cols='30'
              rows='16'
              placeholder='blabla'
            ></textarea>
            <button>Crate</button>
          </div>
          <div className='right'>
            <label htmlFor='text'>service title</label>
            <input type='text' placeholder='bla bla' />
            <label htmlFor='text'>short desc</label>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='blalal'
            ></textarea>
            <label htmlFor='text'>delivery time</label>
            <input type='number' min={1} />

            <label htmlFor='text'>revision</label>
            <input type='number' min={1} />

            <label htmlFor='text'>add features</label>
            <input type='text' placeholder='bla bla' />
            <input type='text' placeholder='bla bla' />
            <input type='text' placeholder='bla bla' />
            <input type='text' placeholder='bla bla' />

            <label htmlFor='text'>price</label>
            <input type='number' min={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
