import React from 'react';
import InfoSectionCard from './InfoSectionCard';

export default function InfoSectionContentLeft({cards_data, bg_color, setIndex, index}){
    return(
        <div className={`mobile-s: h-[16rem] mobile-s: pt-[1rem] mobile-s:overflow-auto mobile-s:whitespace-nowrap card-section bg-gradient-to-t from-[#323445] to-[#232533] section-content-left pb-0`}>
                {cards_data && cards_data.map(item => <InfoSectionCard id= {item['id']} title = {item['title']} icon= {item['icon']} active_icon= {item['active_icon']} description= {item['description']} setIndex={setIndex} index = {index}/>)}
        </div>
    )
}

