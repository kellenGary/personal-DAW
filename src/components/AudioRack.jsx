import { BsCircleFill } from 'react-icons/bs';
import React from 'react';
import { Slider } from '@mui/material';

function AudioRack() {
  return (
    <div className={'audio-rack'}>
      <div>
        <div className={'row-straight'}>
          <span className={'rack-name'}>Name</span>
          <Slider
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
        </div>
        <div className={'plugin-status'}>
          <BsCircleFill className={'dot'}/>
          <BsCircleFill className={'dot'}/>
          <BsCircleFill className={'dot'}/>
          <BsCircleFill className={'dot'}/>
          <BsCircleFill className={'dot'}/>
          <BsCircleFill className={'dot'}/>
          <BsCircleFill className={'dot'}/>
          <BsCircleFill className={'dot'}/>
          <BsCircleFill className={'dot'}/>
          <BsCircleFill className={'dot'}/>
        </div>
      </div>
    </div>
  )
}


export default AudioRack;
