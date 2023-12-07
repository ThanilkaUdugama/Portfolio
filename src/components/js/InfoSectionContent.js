import React from 'react';
import InfoSectionContentLeft from './InfoSectionContentLeft';
import InfoSectionContentRight from './InfoSectionContentRight';

export default function InfoSectionContent(){
    return(
        <div className='section-content'>
            <InfoSectionContentLeft />
            <InfoSectionContentRight />
        </div>
    )
}