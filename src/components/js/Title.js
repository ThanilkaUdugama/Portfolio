import React, { useEffect, useRef, useState } from "react";
import WriteILetterShuffle from "../../animations/writeInLetterShuffle";
import useIsInViewport from "../../functions/useIsInViewport";
import WriteInWordShuffle from "../../animations/writeInWordShuffle";
export default function Title({title, bg_color}){

    const [PrevText, setPrevText] = useState('')
    const [LastText, setLastText] = useState('')
    const [TextIndex, setTextIndex] = useState(0)

    const [active, setActive] = useState(false)

    const ref = useRef(null);
    const ref_visible = useIsInViewport(ref);

    useEffect(()=>{
        (ref_visible) ? setActive(true) : setActive(false);
    },[ref_visible])

    useEffect(()=>{
      WriteInWordShuffle(setPrevText, setLastText, title, TextIndex, setTextIndex, 10, 20)
    }, [TextIndex, active])

    useEffect(()=>{
        setTextIndex(0);
    },[active])

    return(
        <div ref={ref} className= {`section-header bg-[${bg_color}] flex flex-col justify-center items-center font-bold text-white text-4xl py-10`}>
          <div className={`flex items-end ${(active) ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className= {`mobile-s:text-[1.2rem] mobile-m:text-[1.4rem] mobile-l:text-[1.6rem] tablet:text-[2rem] transition `}><span>{PrevText}</span><span className="opacity-50">{LastText}</span></h2>
          <span className="mobile-s:w-[0.4rem] mobile-s:h-[0.4rem] mobile-s:mb-[0.7rem] mobile-s:ml-[0.5rem] bg-[#FABE57]"></span>
          </div>
        </div>
    )
}