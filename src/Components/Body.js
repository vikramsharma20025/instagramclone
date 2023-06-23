import React from 'react';
import "./Body.css";
import Story from './Story';
import Posts from './Posts';
import Side from './Side';

function Body() {
  return (
    <div className='body'>
      <div className='main-content'>
        <Story />
        <Posts />
      </div>
      <div className='side-suggestions'>
        <Side />
      </div>
    </div>
  );
}

export default Body;