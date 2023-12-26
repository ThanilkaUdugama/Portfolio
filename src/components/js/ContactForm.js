import React, { useEffect, useState } from "react";
import ContactTitle from './Title.js'
import FormItem from "./FormItem.js";
import { useRef } from "react";
import useIsInViewport from "../../functions/useIsInViewport.js";
import { motion } from "framer-motion";

export default function ContactForm({bg_color}){

    const [active, setActive] = useState(false)

    const ref = useRef(null);
    const ref_visible = useIsInViewport(ref);

    const styles = {
        offscreen: {
          opacity: 0,
          y: 20
        },
        onscreen: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      }

    useEffect(()=>{
        (ref_visible) ? setActive(true) : setActive(false);
    },[ref_visible])


    useEffect(()=>{
        const c = document.querySelector('#contact-form');
    },[])

    return(
        <div id="contact-form" className="-mt-10">
            <ContactTitle title = "Contact Me" bg_color={bg_color} active = {active} />
            <div ref={ref} className={` mobile-s:-mt-[2rem] mobile-s:px-8 tablet:px-[8rem] pb-10 flex flex-col justify-center items-stretch pt-3 bg-[#232533] w-full`}>
                <motion.div
                initial= {styles['offscreen']}    
                whileInView = {styles['onscreen']}                
                className= {`duration-0 pt-0 rounded-lg flex-col items-center justify-center duration-1000`}>
                    <FormItem field='Name' type = 'text'/>
                    <FormItem field='Email' type = 'text'/>
                    <FormItem field='Message' type = 'textarea'/>
                    <div className="flex justify-center">
                        <motion.button 
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="h-16 w-16 -mt-8 border-8 border-[#232533] bg-[#FEAD20] text-white flex justify-center items-center rounded-full"><svg className = "mobile-s: w-7 mobile-s: h-7 "xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="currentColor" d="m368.4 18.3l-55.7 55.8l125.2 125.2l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2l-46-46.1c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8l-144.1 43.2c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4l153.6-153.5c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1l2.8-9.2L288 94.6z"/></svg></motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}