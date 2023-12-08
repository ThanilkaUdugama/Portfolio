import React from 'react';
import InfoSectionContentLeft from './InfoSectionContentLeft';
import InfoSectionContentRight from './InfoSectionContentRight';

export default function InfoSectionContent({tbg_color, bbg_color, cards_data, setIndex, index, code, section_data}){
    return(
        <div className={'section-content'}>
            <InfoSectionContentLeft cards_data={cards_data} bg_color = {tbg_color} setIndex = {setIndex} index={index}/>
            <InfoSectionContentRight bg_color = {bbg_color} index = {index} code = {code} section_data = {section_data}/>
        </div>
    )
}