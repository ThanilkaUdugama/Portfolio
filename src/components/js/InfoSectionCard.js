import React from 'react';
import { motion } from 'framer-motion';

export default function InfoSectionCard({ id, title, icon, active_icon, description, setIndex, index,}){
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

                    className={`select-card bg-[${(index == id) ? '#FEAD20' : '#323445'}] mobile-s:w-[12rem] mobile-s:h-[12rem] inline-block mx-3 rounded-sm transition ${(index == id) ? 'shadow-none' : 'shadow-2xl'} cursor-pointer duration-0`} onClick={()=> setIndex(id)}
                    >
    
                    <div className='flex flex-col mobile-s:w-[12rem] mobile-s:h-[12rem] mobile-m  justify-center items-center'>
                        <img src = {icon} className='mobile-s:h-[5rem] mobile-s:w-[5rem] p-2'></img>
                        <h3 className='mobile-s:pt-[0.8rem] font-normal text-white'>{title}</h3>
                    </div>
                

            </motion.div>    
                )
        
}