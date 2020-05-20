import React from 'react';

import './HomePage.styles.scss';

export const HomePage = () => (
    <div className='homepage-container'>
      <h1 className='header'>Dro's Clothing</h1>
      <div className='card-container'>

        <div className='card'>
          <h2>SNEAKERS</h2>
          <p>SHOP NOW</p>
        </div>

        <div className='card'>
          <h2>HATS</h2>
          <p>SHOP NOW</p>
        </div>

        <div className='card'>
          <h2>JACKETS</h2>
          <p>SHOP NOW</p>
        </div>

        <div className='card'>
          <h2>WOMENS</h2>
          <p>SHOP NOW</p>
        </div>

        <div className='card'>
          <h2>MENS</h2>
          <p>SHOP NOW</p>
        </div>

      </div>
      
    </div>
);