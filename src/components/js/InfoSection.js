import React, { useState } from 'react';
import InfoSectionTitle from './Title';
import InfoSectionContent from './InfoSectionContent';

export default function InfoSection({code, title, title_bg_color, tbg_color, bbg_color, cards_data, section_data}){
    const [index , setIndex] = useState(0);
    return(
        <div>    
            <InfoSectionTitle title = {title} bg_color={title_bg_color} />
            <InfoSectionContent tbg_color = {tbg_color} bbg_color = {bbg_color} cards_data={cards_data} setIndex = {setIndex} index = {index} code = {code} section_data = {section_data}/>
        </div>
    )
}