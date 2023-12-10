import React from 'react';

export default function InfoSectionCard({ id, title, icon, active_icon, description, setIndex, index}){
        return(
            <div className={`bg-[${(index == id) ? '#FEAD20' : '#323445'}] mobile-s:w-[12rem] mobile-s:h-[12rem] inline-block mx-3 rounded-sm shadow-2xl`} onClick={()=> setIndex(id)}>
                    <div className='flex flex-col mobile-s:w-[12rem] mobile-s:h-[12rem] mobile-m  justify-center items-center'>
                        <img src = {icon} className='mobile-s:h-[5rem] mobile-s:w-[5rem] p-2'></img>
                        <h3 className='mobile-s:pt-[0.8rem] font-normal text-white'>{title}</h3>
                    </div>
                </div>)
        
}