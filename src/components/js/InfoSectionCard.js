import React from 'react';

export default function InfoSectionCard({ id, title, icon, active_icon, description, setIndex, index}){
        return(
            <div className={`bg-[${(index == id) ? '#FEAD20' : '#323445'}] mobile-s:w-[12rem] mobile-s:h-[12rem] inline-block mobile-m:w-36 mobile-l:w-44 tablet:w-40 laptop-s:w-36 laptop-m:w-48 laptop-l:w-52  mobile-m:h-36 mobile-l:h-44 tablet:h-40 laptop-s:h-36 laptop-m:h-48 laptop-l:h-52 mx-3 rounded-sm shadow-2xl z-40`} onClick={()=> setIndex(id)}>
                    <div className='flex flex-col mobile-s:w-[12rem] mobile-s:h-[12rem] justify-center items-center'>
                        <img src = {icon} className='mobile-s:h-[5rem] mobile-s:w-[5rem] mobile-m:w-20 mobile-l:w-24 tablet:w-20 laptop-m:w-24 laptop-l:w-28 p-2'></img>
                        <h3 className='mobile-s:pt-[0.8rem] font-normal text-white'>{title}</h3>
                    </div>
                </div>)
        
}