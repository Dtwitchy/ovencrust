import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const DownloadApp = () => {
  return (
    <div className='downloadApp' id='downloadApp'>
      <p>For Better Experience Download <br /> OvenCrust App</p>
      <div className="appPlatforms">
        <img src={assets.play_store} alt="Play Store" />
        <img src={assets.app_store} alt="App Store" />
      </div>
    </div>
  );
}

export default DownloadApp;