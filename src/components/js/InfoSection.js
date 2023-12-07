import React from 'react';
import InfoSectionTitle from './Title';
import InfoSectionContent from './InfoSectionContent';

export default function InfoSection({title}){
    return(
        <div>    
            <InfoSectionTitle title = {title} />
            <InfoSectionContent />
        </div>
    )
}