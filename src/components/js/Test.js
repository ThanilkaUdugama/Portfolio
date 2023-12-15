import React, { useEffect, useState } from "react";
import WriteInWordFadeIn from "../../animations/writeInTextFadeIn";
import WriteILetterShuffle from "../../animations/writeInLetterShuffle";
export default function Test(){
    const text = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae"
    const [prevText, setPrevText] = useState('')
    const [lastLetter, setLastLetter] = useState('')
    const [index, setIndex] = useState(0)

    const text_array = text.split(' ')
    const amount_of_words = 4;

    useEffect(() => {
        WriteILetterShuffle(setPrevText, setLastLetter, text, index, setIndex, 10, 10)
    }, [index])


    return(
        <div className="text-white text-[1.5rem] h-[10rem]">
            <p className="fade">sadsadsad</p>
            <spav>{prevText}</spav><span id="fade-element">{lastLetter}</span>
        </div>
    )
}