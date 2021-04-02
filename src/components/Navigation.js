import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className='nav'>
      <div className='home'>
        <Link to='/'>Home</Link>
      </div>
      <div className='about'>
        <Link to='/about'>About</Link>
      </div>
    </div>
  );
}

export default Navigation;
