import React from 'react';
import InfoSectionCard from './InfoSectionCard';

export default function InfoSectionContentLeft({cards_data, bg_color, setIndex, index}){
    return(
        <div className={'bg-['+bg_color+'] section-content-left flex w-full justify-center items-center pb-0 px-10'}>
            {cards_data && cards_data.map(item => <InfoSectionCard id= {item['id']} title = {item['title']} icon= {item['icon']} active_icon= {item['active_icon']} description= {item['description']} setIndex={setIndex} index = {index}/>)}
        </div>
    )
}