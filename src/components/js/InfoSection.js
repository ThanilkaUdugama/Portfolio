import React, { useState } from 'react';
import InfoSectionTitle from './Title';
import InfoSectionContent from './InfoSectionContent';

export default function InfoSection({title, title_bg_color, tbg_color, bbg_color, cards_data, section_data, active, code}){
    const [index , setIndex] = useState(0);
    return(
        <div>    
            <InfoSectionTitle title = {title} bg_color={title_bg_color} active = {active}/>
            <InfoSectionContent tbg_color = {tbg_color} bbg_color = {bbg_color} cards_data={cards_data} setIndex = {setIndex} index = {index} section_data = {section_data} active = {active} code = {code}/>
        </div>
    )
}