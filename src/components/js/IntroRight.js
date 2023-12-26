import React, { useEffect, useRef, useState } from "react";
import WriteInWordShuffle from "../../animations/writeInWordShuffle";
import { characters } from "../../data/Characters";
import useIsInViewport from "../../functions/useIsInViewport";
import { Description, Name } from "../../data/IntroData";
import ShuffleWholeText from "../../animations/shufflewholeText";

export default function IntroRight({code, active}){
    const [Text, setText] = useState('')
    const [Opacity, setOpacity] = useState(50)
    const [TextIndex, setTextIndex] = useState(0)

    const intro_ref = useRef(null);
    const intro_ref_visible = useIsInViewport(intro_ref);

    const [PrevText1, setPrevText1] = useState('')
    const [LastText1, setLastText1] = useState('')
    const [TextIndex1, setTextIndex1] = useState(0)

    const [PrevText2, setPrevText2] = useState('')
    const [LastText2, setLastText2] = useState('')
    const [TextIndex2, setTextIndex2] = useState(0)

    useEffect(() => {
        ShuffleWholeText(setText, setOpacity, Description, 10, 50);
    }, [TextIndex, intro_ref_visible])

    useEffect(() => {
        WriteInWordShuffle(setPrevText1, setLastText1, Name['first_name'], TextIndex1, setTextIndex1, 15, 50, 2);
    }, [TextIndex1, intro_ref_visible])

    useEffect(() => {
        WriteInWordShuffle(setPrevText2, setLastText2, Name['last_name'], TextIndex2, setTextIndex2, 15, 50, 2);
    }, [TextIndex2, intro_ref_visible])

    useEffect(() =>{
        setTextIndex(0)
        setTextIndex1(0)
        setTextIndex2(0)
        setPrevText1(' ')
        setPrevText2(' ')
    },[intro_ref_visible])

    return(
        <div ref = {intro_ref} className= {`mobile-s:justify-start mobile-s:min-h-[25rem] mobile-s: px-10 bg-[#232533] tablet:bg-gradient-to-t from-[#232533] to-[#323445] w-full tablet:w-2/5 tablet:justify-center z-10 flex flex-col justify-center items-center font-medium text-white`}>
            <div className= {`${(intro_ref_visible) ? 'opacity-100' : 'opacity-0'} duration-1000 flex flex-col justify-center items-center mt-1`}>
                <h2 className="mobile-s:text-[2.5rem] mobile-s:py-2 font-bold text-[3rem]"><span>{PrevText1}</span><span>{LastText1}</span></h2>
                <h2 className="mobile-s:text-[2.5rem] font-bold text-[3rem] text-[#FEC158] -mt-7"><span>{PrevText2}</span><span>{LastText2}</span></h2>
            </div>
            <p className= {`mobile-s: pt-4 mobile-s:text-sm opacity-${Opacity}`}>
            {Text}
            </p>
        </div>
    )
}