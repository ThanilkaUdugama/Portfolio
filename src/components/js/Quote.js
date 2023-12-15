import React, { useEffect, useRef, useState } from "react";
import image from '../../images/test_icon.png'
import { text } from "@fortawesome/fontawesome-svg-core";
import WriteIn from "../../animations/writeIn";
import WriteInWordShuffle from "../../animations/writeInWordShuffle";
import useIsInViewport from "../../functions/useIsInViewport";


export default function Quote({quotes, images}){
    const [index, setIndex] = useState(0);

    const [PrevText, setPrevText] = useState('')
    const [LastText, setLastText] = useState('')
    const [TextIndex, setTextIndex] = useState(0)

    const [active, setActive] = useState(false)

    const quote_ref = useRef(null);
    const quote_ref_visible = useIsInViewport(quote_ref);

    useEffect(()=>{
        (quote_ref_visible) ? setActive(true) : setActive(false);
    },[quote_ref_visible])

    useEffect(() => {
        setTimeout(()=> setIndex((index + 1)%quotes.length) , 5000);
        setTextIndex(0);
        
    }, [index])

    
    useEffect(()=>{
        WriteInWordShuffle(setPrevText, setLastText, quotes[index], TextIndex, setTextIndex, 4, 20)
        
        
    }, [TextIndex])
    

    return(
    
    <div className = "mobile-s:px-6 mobile-s:pt-12 bg-[#232533] min-h-[34rem] flex flex-col tablet:flex-row items-center">
        <div ref={quote_ref} className={`mobile-s: w-full flex justify-center items-center w-1/2 ${(active)? 'opacity-100' : 'opacity-0'} duration-300`}>
            <img className = "mobile-s:w-[14rem] mobile-s:h-[14rem] tablet:h-[20rem] tablet:w-[20rem] p-2 grayscale rounded-xl" src = {images[index]}></img>
        </div>
        <div ref={quote_ref} className={`mobile-s: w-full flex flex-col items-start justify-center items-center w-1/2 ${(active)? 'opacity-100' : 'opacity-0'} duration-300`}>
            <div className="mobile-s: w-full text-[#424658] mb-2 flex justify-start"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 448 512"><path fill="currentColor" d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V216z"/></svg></div>
            <div className="mobile-s:text-[1rem] mobile-s:min-h-[14rem] tablet:text-[1.5rem] text-white font-semibold text-3xl"><span>{PrevText}</span><span className="opacity-50">{LastText}</span></div>
            <div className="flex p-10">
            {quotes.map(item => <div className= {`mobile-s:w-[0.8rem] mobile-s:h-[0.5rem] mobile-s:mx-[0.5rem] mobile-m:w-[1.5rem] w-16 h-2 rounded transistion duration-500 mx-3 ${(quotes.indexOf(item) == index)? 'bg-[#FEAD20]' : 'bg-[#323445]'}`}></div>)}
        </div>
        </div>
    </div>

    )
}