import React, { useEffect, useRef, useState } from 'react';
import InfoSectionCard from './InfoSectionCard';
import useIsInViewport from '../../functions/useIsInViewport';


export default function InfoSectionContentLeft({code, cards_data, bg_color, setIndex, index}){

    const [card_class, setclass] = useState('');

    const [active, setActive] = useState(false)

    const ref = useRef(null);
    const ref_visible = useIsInViewport(ref);

    useEffect(()=>{
        (ref_visible) ? setActive(true) : setActive(false);
    },[ref_visible])

    useEffect(() =>{
        const m = document.querySelectorAll('.card-container');
            let length = (document.querySelector('.select-card').offsetWidth + 24 ) * document.querySelector(`#${code}`).childElementCount; 
            if(length > window.innerWidth){
                console.log('')
                setclass('mobile-s: h-[16rem] mobile-s: pt-[1rem] mobile-s:overflow-auto mobile-s:whitespace-nowrap card-section bg-gradient-to-t from-[#323445] to-[#232533] section-content-left pb-0')
                
            }
            else{
                setclass('flex justify-center mobile-s: h-[16rem] mobile-s: pt-[1rem] bg-gradient-to-t from-[#323445] to-[#232533] pb-0')
                
            }
        
    }, [])
    return(
        // <div className={`card mobile-s: h-[16rem] mobile-s: pt-[1rem] mobile-s:overflow-auto mobile-s:whitespace-nowrap card-section bg-gradient-to-t from-[#323445] to-[#232533] section-content-left pb-0`}>
        //         {cards_data && cards_data.map(item => <InfoSectionCard id= {item['id']} title = {item['title']} icon= {item['icon']} active_icon= {item['active_icon']} description= {item['description']} setIndex={setIndex} index = {index}/>)}
        // </div>
        
        <div id ={code} ref={ref} className={card_class}>
                {cards_data && cards_data.map(item => <InfoSectionCard id= {item['id']} title = {item['title']} icon= {item['icon']} active_icon= {item['active_icon']} description= {item['description']} setIndex={setIndex} index = {index} active = {active}/>)}
        </div>
    )
}

