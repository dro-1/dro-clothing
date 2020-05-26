import React from 'react';

import Directory from './../../components/directory/directory.component';

import './homepage.styles.scss';

export const HomePage = () => (
    <div className='homepage-container'>
      <h1 className='header'>Dro's Clothing</h1>
      <Directory />
    </div>
);