import React, { useEffect, useRef, useState } from "react";
import User from '../../images/user.png'
import useIsInViewport from "../../functions/useIsInViewport";

export default function IntroLeft(){
    const [active, setActive] = useState(true);
    const intro_ref = useRef(null);
    const intro_ref_visible = useIsInViewport(intro_ref);

    useEffect(()=>{
        setActive(intro_ref_visible);
    },[intro_ref_visible])

    const [name, setName] = useState('');

    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');

    const [char_num, charNum] = useState(1);
    const [word_num, wordNum] = useState(0);


    const [reverse, setReverse] = useState(false);
    let display_names = ['Software Developer.', 'Web Developer.', 'Data Scientist.', 'Programmer.', 'Ethical Hacker.', 'Tech Enthusiast.'];

    function call(){
        setTimeout(function () { 
            setName(display_names[word_num].slice(0,char_num))
            setName1(display_names[word_num].slice(0,char_num).split(" ")[0]);
            setName2(display_names[word_num].slice(0,char_num).split(" ")[1]);
            
        }, ((char_num == display_names[word_num].length-1) && reverse) ? 500 : 30);
    }

    useEffect(()=>{
        if(!reverse && char_num != 0){
            call();
            if(char_num == display_names[word_num].length){
                setReverse(true);
                charNum(c =>  c- 1)
            }
            else{
                charNum(c => c+ 1)
            }
        }
        
        else if(reverse && char_num == 0){
                call();
                wordNum(n => (n+1)%display_names.length);
                charNum(1);
                setReverse(false);
            
        }

        else if (reverse && char_num != 0){
            call();
            charNum(n => n-1);
        }
    },[name])

    return(
        <div className='mobile-s: bg-gradient-to-t from-[#232533] to-[#323445] bg-[#323445] w-full tablet:w-3/5 h-96 tablet:h-100 flex items-center justify-center relative'>
                <img className= {`${(active) ? 'opacity-100' : 'opacity-0'} duration-500 grayscale saturate-50 h-96 tablet:h-100 drop-shadow-2xl z-10 contrast-80`} src = {User} ref = {intro_ref}></img>
                {/* <div className="absolute flex flex-col justify-center items-center bottom-10">
                    <span className="text-[#FEC158] text-6xl font-extrabold drop-shadow-2xl">{name1}</span>
                    <span className="text-[#FFFFFF] text-6xl font-extrabold drop-shadow-2xl">{name2}</span>
                </div> */}
                
                <div className= {`${(active) ? 'opacity-100' : 'opacity-0'} duration-1000 absolute z-20 flex justify-center items-center`}>
                    <p className="-mb-[10rem] py-[0.1rem] font-bold bg-black text-white px-2 z-40 text-center rounded-l">{'<Role>'}</p>
                    <p className="text-[#FEAD20] py-[0.1rem] bg-black font-bold translate-y-20">{name}</p>
                    <p className="-mb-[10rem] py-[0.1rem] font-bold bg-black text-white z-40 px-2 text-center rounded-r">{'</Role>'}</p>
                </div>

    

                <div className= {`${(active) ? 'opacity-100' : 'opacity-0'} duration-1000 absolute bg-[#FEC158] mobile-s:h-64 mobile-s:w-64 mobile-m:w-72 mobile-m:h-72 mobile-l:h-80 mobile-l:w-80 laptop-m:h-96 laptop-m:w-96 translate-y-4 rounded-full`}>
                </div>

        </div>
    )
}