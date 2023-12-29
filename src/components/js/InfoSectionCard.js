import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function InfoSectionCard({ id, title, icon, active_icon, description, setIndex, index,}){
        
        const [text_color, setTextColor] = useState('white')
        return(
            <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView ={{ opacity: 1, scale: 0.9 }}
                    transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                        type: "spring",
                        damping: 8,
                        stiffness: 100,
                        restDelta: 0.001
                        }

                    }}
                    whileHover={{ scale: 1 }}
                    whileTap={{ scale: 0.9 }}

                    className={`select-card bg-[${(index == id) ? '#FEAD20' : '#323445'}] mobile-s:w-[12rem] mobile-s:h-[12rem] inline-block mx-3 rounded-md transition ${(index == id) ? 'shadow-none' : 'shadow-2xl'} cursor-pointer duration-0`} onClick={()=> {setIndex(id); setTextColor('white')}}
                    >
    
                    <div className= {`duration-0 flex flex-col mobile-s:w-[12rem] mobile-s:h-[12rem] mobile-m  justify-center items-center text-${text_color}`} onMouseEnter={() => (index != id) ? setTextColor('[#FEAD20]') : null} onMouseLeave={() => (index != id) ? setTextColor('white') : null} >
                        <div className='duration-0 mobile-s:h-[5rem] mobile-s:w-[5rem] p-2 flex justify-center items-center'> {icon}</div>
                        <h3 className='duration-0 mobile-s:pt-[0.8rem] font-normal'>{title}</h3>
                    </div>
                

            </motion.div>    
                )
        
}