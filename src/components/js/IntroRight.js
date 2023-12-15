import React, { useEffect, useRef, useState } from "react";
import WriteInWordShuffle from "../../animations/writeInWordShuffle";
import { characters } from "../../data/Characters";
import useIsInViewport from "../../functions/useIsInViewport";


export default function IntroRight({code, active}){
    const [PrevText, setPrevText] = useState('')
    const [LastText, setLastText] = useState('')
    const DisplayText = "Hello there! I'm Thanika Vishvajith Udugama, a guy with passion to the facinating IT industry. I'm a B.Sc in Computer Science student at Univeristy of Kelaniya. I'm mostly intersted in Machine learning, Ethical Hacking and Software Development and I'm extreamly comfortable with spending my time with learning upcomming technologies, frameworks and concepts to perform best in every project do.";
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
        WriteInWordShuffle(setPrevText, setLastText, DisplayText, TextIndex, setTextIndex, 3, 10);
    }, [TextIndex, intro_ref_visible])

    useEffect(() => {
        WriteInWordShuffle(setPrevText1, setLastText1, "Thanilka", TextIndex1, setTextIndex1, 15, 50);
    }, [TextIndex1, intro_ref_visible])

    useEffect(() => {
        WriteInWordShuffle(setPrevText2, setLastText2, "Udugama", TextIndex2, setTextIndex2, 15, 50);
    }, [TextIndex2, intro_ref_visible])

    useEffect(() =>{
        setTextIndex(0)
        setTextIndex1(0)
        setTextIndex2(0)
        setPrevText1(' ')
        setPrevText2(' ')
    },[intro_ref_visible])

    return(
        <div ref = {intro_ref} className= {`mobile-s:justify-start mobile-s:min-h-[25rem] mobile-s: px-6 bg-[#232533] tablet:bg-gradient-to-t from-[#232533] to-[#323445] w-full tablet:w-2/5 tablet:justify-center z-10 flex flex-col justify-center items-center font-medium text-white`}>
            <div className= {`${(intro_ref_visible) ? 'opacity-100' : 'opacity-0'} duration-1000 flex flex-col justify-center items-center mt-1`}>
                <h2 className="mobile-s:text-[2.5rem] mobile-s:py-2 font-bold text-[3rem]"><span>{PrevText1}</span><span>{LastText1}</span></h2>
                <h2 className="mobile-s:text-[2.5rem] font-bold text-[3rem] text-[#FEC158] -mt-7"><span>{PrevText2}</span><span>{LastText2}</span></h2>
            </div>
            <p className="mobile-s: pt-4 mobile-s:text-sm">
            <span>{PrevText}</span><span className="opacity-50">{LastText}</span>
            </p>
        </div>
    )
}