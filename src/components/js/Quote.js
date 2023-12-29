import React, { useEffect, useRef, useState } from "react";
import WriteInWordShuffle from "../../animations/writeInWordShuffle";
import WriteILetterShuffle from "../../animations/writeInLetterShuffle";
import { motion } from "framer-motion";
const delay = ms => new Promise(res => setTimeout(res, ms));

export default function Quote({quotes, images, authors}){
    const [index, setIndex] = useState(0);
    const [img_vis, setImgVis] = useState(100)

    const [PrevText, setPrevText] = useState('')
    const [LastText, setLastText] = useState('')
    const [TextIndex, setTextIndex] = useState(0)

    const [PrevAuth, setPrevAuth] = useState('')
    const [LastAuth, setLastAuth] = useState('')
    const [AuthIndex, setAuthIndex] = useState(0)


    useEffect(() => {
        setImgVis(100)
        setTimeout(async ()=> {
            setImgVis(0)
            await delay(200)
            setIndex((index + 1)%quotes.length)
            await delay(200)
            setImgVis(100)
        
        
        } , 5000);
        setTextIndex(0);
        setAuthIndex(0);
        
    }, [index])

    
    useEffect(()=>{
        WriteInWordShuffle(setPrevText, setLastText, quotes[index], TextIndex, setTextIndex, 4, 20)
        
        
    }, [TextIndex])

    useEffect(()=>{
        WriteILetterShuffle(setPrevAuth, setLastAuth, authors[index], AuthIndex, setAuthIndex, 4, 5)
        
        
    }, [AuthIndex])
    

    return(
    
    <div className = "mobile-s:px-6 mobile-s:pt-12 bg-[#232533] min-h-[34rem] flex flex-col tablet:flex-row items-center">
        <div className={`mobile-s: w-full flex justify-center items-center w-1/2`}>
            <motion.img style={{'border-radius': '2rem'}}
            whileHover={{ scale: 1.1 }}
            className = {`rounded opacity-${img_vis} mobile-s:w-[14rem] mobile-s:h-[14rem] tablet:h-[20rem] tablet:w-[20rem] p-2 grayscale`} src = {images[index]}></motion.img>
        </div>
        <div className={`opacity-${img_vis} mobile-s: w-full flex flex-col items-start justify-center items-center w-1/2 duration-300 pt-10`}>
            <div className= {`mobile-s:text-[1.5rem] px-4 mobile-s:min-h-[14rem] tablet:text-[1.5rem] text-white font-semibold text-3xl`}><span>{PrevText}</span><span className="opacity-50">{LastText}</span></div>
            <div className= {`opacity-${img_vis} text-[#FEAD20] font-medium text-[1rem]`}><span>{PrevAuth}</span><span>{LastAuth}</span></div>
            <div className="flex p-10">
            {quotes.map(item => <div className= {`mobile-s:w-[0.8rem] mobile-s:h-[0.5rem] mobile-s:mx-[0.5rem] mobile-m:w-[1.5rem] w-16 h-2 rounded transistion duration-500 mx-3 ${(quotes.indexOf(item) == index)? 'bg-[#FEAD20]' : 'bg-[#323445]'}`}></div>)}
        </div>
        </div>
    </div>

    )
}