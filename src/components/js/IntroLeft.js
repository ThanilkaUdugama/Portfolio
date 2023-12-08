import React, { useEffect, useState } from "react";
import User from '../../images/user.png'

export default function IntroLeft(){
    const [name, setName] = useState('');

    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');

    const [char_num, charNum] = useState(1);
    const [word_num, wordNum] = useState(0);

    const [reverse, setReverse] = useState(false);
    let display_names = ['Software Enginner.', 'Data Scientist.', 'Programmer.', 'Ethical Hacker.'];

    function call(){
        setTimeout(function () { 
            setName(display_names[word_num].slice(0,char_num))
            setName1(display_names[word_num].slice(0,char_num).split(" ")[0]);
            setName2(display_names[word_num].slice(0,char_num).split(" ")[1]);
            
        }, ((char_num == display_names[word_num].length-1) && reverse) ? 500 : 100);
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
        <div className='bg-[#323445] w-full tablet:w-3/5 h-96 tablet:h-100 flex items-center justify-center relative'>
                <img className="grayscale h-96 tablet:h-100 drop-shadow-2xl z-10" src = {User}></img>
                {/* <div className="absolute flex flex-col justify-center items-center bottom-10">
                    <span className="text-[#FEC158] text-6xl font-extrabold drop-shadow-2xl">{name1}</span>
                    <span className="text-[#FFFFFF] text-6xl font-extrabold drop-shadow-2xl">{name2}</span>
                </div> */}

                <div className="absolute z-20">
                    <p className="text-white font-bold">{name}</p>
                </div>

                <div className=" absolute bg-[#FEC158] h-96 w-96 rounded-full">
                </div>

        </div>
    )
}