import React from 'react';

export default function InfoSection({title}){
    return(
        <div>
        <div className='section-header'>
          {title}
        </div>
        <div className='section-content'>
          <div className='section-content-left'>
            LEFT
          </div>
          <div className='section-content-right'>
            RIGHT
          </div>
        </div>
      </div>
    )
}