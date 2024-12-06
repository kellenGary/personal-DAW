import React, { useRef, useState } from 'react';
import './MixerBar.css'
import { BsCircleFill } from "react-icons/bs";
import AudioRack from './AudioRack';


function MixerBar() {

  return (
    <div className={'mixer-bar'}>
      <AudioRack/>
    </div>
  )
}

export default MixerBar;
