import React from 'react';
import MixerBar from './MixerBar';
import './Home.css'

function Home() {
  return (
    <div className={'home-page'}>
      <div className={"mixer-bar-container"}>
        <MixerBar />
      </div>
    </div>
  );
}

export default Home;
