import React from 'react';

export default function InfoSectionCard({ id, title, icon, active_icon, description, setIndex, index}){
        if(index == id){
            return(<div className='bg-[#FEAD20] flex flex-col justify-center items-center mobile-s:w-32 mobile-m:w-36 mobile-l:w-44 tablet:w-40 laptop-s:w-36 laptop-m:w-48 laptop-l:w-52 mobile-s:h-32 mobile-m:h-36 mobile-l:h-44 tablet:h-40 laptop-s:h-36 laptop-m:h-48 laptop-l:h-52 mx-3 rounded-sm shadow-xl' onClick={()=> setIndex(id)}>
                    <img src = {icon} className='mobile-s:w-16 mobile-m:w-20 mobile-l:w-24 tablet:w-20 laptop-m:w-24 laptop-l:w-28 p-2'></img>
                    <h3 className='text-white'>{title}</h3>
                    </div>)
        }
        else{
            return(<div className='bg-[#323445] flex flex-col justify-center items-center mobile-s:w-32 mobile-m:w-36 mobile-l:w-44 tablet:w-40 laptop-s:w-36 laptop-m:w-48 laptop-l:w-52 mobile-s:h-32 mobile-m:h-36 mobile-l:h-44 tablet:h-40 laptop-s:h-36 laptop-m:h-48 laptop-l:h-52 mx-3 rounded-sm shadow-xl' onClick={()=> setIndex(id)}>
                    <img src = {icon} className='mobile-s:w-16 mobile-m:w-20 mobile-l:w-24 tablet:w-20 laptop-m:w-24 laptop-l:w-28 p-2'></img>
                    <h3 className='text-white'>{title}</h3>
                    </div>)
        }
    
}