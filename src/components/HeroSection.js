import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>WANDERLUST WAY</h1>
      <p>Find your path, follow your wanderlust</p>
      <div className='hero-buttons'>
        <Button
          className='buttons'
          buttonStyle='buttons--outline'
          buttonSize='buttons--large'
        >
          GET STARTED
        </Button>
        <Button
          className='buttons'
          buttonStyle='buttons--primary'
          buttonSize='buttons--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
