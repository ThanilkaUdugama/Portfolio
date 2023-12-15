import React from 'react';
import InfoSectionContentLeft from './InfoSectionContentLeft';
import InfoSectionContentRight from './InfoSectionContentRight';

export default function InfoSectionContent({tbg_color, bbg_color, code, cards_data, setIndex, index, section_data, active}){
    return(
        <div className={'section-content'}>
            <InfoSectionContentLeft code = {code} cards_data={cards_data} bg_color = {tbg_color} setIndex = {setIndex} index={index} active = {active}/>
            <InfoSectionContentRight code = {code} bg_color = {bbg_color} index = {index} section_data = {section_data} active={active}/>
        </div>
    )
}