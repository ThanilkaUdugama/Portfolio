import React, { useEffect, useRef, useState } from 'react';
import WriteInNumShuffle from '../../animations/writeInNumShuffle';
import WriteILetterShuffle from '../../animations/writeInLetterShuffle';
import { NUMBERS} from '../../data/Characters';
import { CHARACTORS } from '../../data/Characters';
import useIsInViewport from '../../functions/useIsInViewport';
import WriteInWordShuffle from '../../animations/writeInWordShuffle';
export default function InfoSectionContentRight({bg_color, index, section_data}){
    const [active, setActive] = useState(false)

    const ref = useRef(null);
    const ref_visible = useIsInViewport(ref);

    useEffect(()=>{
        (ref_visible) ? setActive(true) : setActive(false);
    },[ref_visible])

    const [Prev_text1, setPrev_text1] = useState('');
    const [Last_text1, setLast_text1] = useState('');
    const [textIndex_text1, setTextIndex_text1] = useState(0);

    const [Prev_text2, setPrev_text2] = useState('');
    const [Last_text2, setLast_text2] = useState('');
    const [textIndex_text2, setTextIndex_text2] = useState(0);

    const [Prev_text3, setPrev_text3] = useState('');
    const [Last_text3, setLast_text3] = useState('');
    const [textIndex_text3, setTextIndex_text3] = useState(0);

    const [Prev_text4, setPrev_text4] = useState('');
    const [Last_text4, setLast_text4] = useState('');
    const [textIndex_text4, setTextIndex_text4] = useState(0);

    const [Prev_text5, setPrev_text5] = useState('');
    const [Last_text5, setLast_text5] = useState('');
    const [textIndex_text5, setTextIndex_text5] = useState(0);

    const [Prev_text6, setPrev_text6] = useState('');
    const [Last_text6, setLast_text6] = useState('');
    const [textIndex_text6, setTextIndex_text6] = useState(0);

    const [Prev_text7, setPrev_text7] = useState('');
    const [Last_text7, setLast_text7] = useState('');
    const [textIndex_text7, setTextIndex_text7] = useState(7);

    const [Prev_text8, setPrev_text8] = useState('');
    const [Last_text8, setLast_text8] = useState('');
    const [textIndex_text8, setTextIndex_text8] = useState(0);

    const [Prev_text9, setPrev_text9] = useState('');
    const [Last_text9, setLast_text9] = useState('');
    const [textIndex_text9, setTextIndex_text9] = useState(0);

    const [Prev_text10, setPrev_text10] = useState('');
    const [Last_text10, setLast_text10] = useState('');
    const [textIndex_text10, setTextIndex_text10] = useState(0);

    const [Prev_text11, setPrev_text11] = useState('');
    const [Last_text11, setLast_text11] = useState('');
    const [textIndex_text11, setTextIndex_text11] = useState(0);

    const [Prev_text12, setPrev_text12] = useState('');
    const [Last_text12, setLast_text12] = useState('');
    const [textIndex_text12, setTextIndex_text12] = useState(0);

    const [Prev_text13, setPrev_text13] = useState('');
    const [Last_text13, setLast_text13] = useState('');
    const [textIndex_text13, setTextIndex_text13] = useState(0);

    const [Prev_text14, setPrev_text14] = useState('');
    const [Last_text14, setLast_text14] = useState('');
    const [textIndex_text14, setTextIndex_text14] = useState(0);

    const [Prev_value1, setPrev_value1] = useState('');
    const [Last_value1, setLast_value1] = useState('');
    const [textIndex_value1, setTextIndex_value1] = useState(0);

    const [Prev_value2, setPrev_value2] = useState('');
    const [Last_value2, setLast_value2] = useState('');
    const [textIndex_value2, setTextIndex_value2] = useState(0);

    useEffect(()=>{
        if(section_data[index]['text_1'] != null) WriteILetterShuffle(setPrev_text1, setLast_text1, section_data[index]['text_1'], textIndex_text1, setTextIndex_text1, 10, 5, CHARACTORS)
    },[textIndex_text1, active, section_data[index]['text_1']])

    useEffect(()=>{
        if(section_data[index]['text_2'] != null) WriteILetterShuffle(setPrev_text2, setLast_text2, section_data[index]['text_2'], textIndex_text2, setTextIndex_text2, 10, 5, CHARACTORS)
    },[textIndex_text2, section_data[index]['text_2']])

    useEffect(()=>{
        if(section_data[index]['text_3'] != null) WriteILetterShuffle(setPrev_text3, setLast_text3, section_data[index]['text_3'], textIndex_text3, setTextIndex_text3, 10, 5, CHARACTORS)
    },[textIndex_text3, section_data[index]['text_3']])

    useEffect(()=>{
        if(section_data[index]['text_4'] != null) WriteInWordShuffle(setPrev_text4, setLast_text4, section_data[index]['text_4'], textIndex_text4, setTextIndex_text4, 6, 10)
    },[textIndex_text4, section_data[index]['text_4']])

    useEffect(()=>{                                               
        if(section_data[index]['text_5'] != null) WriteInWordShuffle(setPrev_text5, setLast_text5, section_data[index]['text_5'], textIndex_text5, setTextIndex_text5, 6, 10)
    },[textIndex_text5, section_data[index]['text_5']])

    useEffect(()=>{
        if(section_data[index]['text_6'] != null) WriteInWordShuffle(setPrev_text6, setLast_text6, section_data[index]['text_6'], textIndex_text6, setTextIndex_text6, 10, 10)
    },[textIndex_text6, section_data[index]['text_6']])

    useEffect(()=>{
        if(section_data[index]['text_7'] != null){
            WriteILetterShuffle(setPrev_text7, setLast_text7, section_data[index]['text_7'], textIndex_text7, setTextIndex_text7, 4, 3, CHARACTORS)}
    },[textIndex_text7, section_data[index]['text_7']])

    useEffect(()=>{
        if(section_data[index]['text_8'] != null) WriteInWordShuffle(setPrev_text8, setLast_text8, section_data[index]['text_8'], textIndex_text8, setTextIndex_text8, 10, 10)
    },[textIndex_text8, section_data[index]['text_8']])

    useEffect(()=>{
        if(section_data[index]['text_9'] != null) WriteILetterShuffle(setPrev_text9, setLast_text9, section_data[index]['text_9'], textIndex_text9, setTextIndex_text9, 10, 5, CHARACTORS)
    },[textIndex_text9, section_data[index]['text_9']])

    useEffect(()=>{
        if(section_data[index]['text_10'] != null) WriteILetterShuffle(setPrev_text10, setLast_text10, section_data[index]['text_10'], textIndex_text10, setTextIndex_text10, 10, 4, CHARACTORS)
    },[textIndex_text10, section_data[index]['text_10']])

    useEffect(()=>{
        if(section_data[index]['text_11'] != null) WriteILetterShuffle(setPrev_text11, setLast_text11, section_data[index]['text_11'], textIndex_text11, setTextIndex_text11, 10, 5, CHARACTORS)
    },[textIndex_text11, section_data[index]['text_11']])

    useEffect(()=>{
        if(section_data[index]['text_12'] != null) WriteILetterShuffle(setPrev_text12, setLast_text12, section_data[index]['text_12'], textIndex_text12, setTextIndex_text12, 10, 5, CHARACTORS)
    },[textIndex_text12, section_data[index]['text_12']])

    useEffect(()=>{
        if(section_data[index]['text_13'] != null) WriteILetterShuffle(setPrev_text13, setLast_text13, section_data[index]['text_13'], textIndex_text13, setTextIndex_text13, 10, 5, CHARACTORS)
    },[textIndex_text13, section_data[index]['text_13']])

    useEffect(()=>{
        if(section_data[index]['text_14'] != null) WriteILetterShuffle(setPrev_text14, setLast_text14, section_data[index]['text_14'], textIndex_text14, setTextIndex_text14, 3, 0.1, CHARACTORS)
    },[textIndex_text14, section_data[index]['text_14']])

    

    useEffect(()=>{
        if(section_data[index]['value_1'] != null) WriteILetterShuffle(setPrev_value1, setLast_value1, section_data[index]['value_1'], textIndex_value1, setTextIndex_value1, 10, 30, NUMBERS)
    },[textIndex_value1])

    useEffect(()=>{
        if(section_data[index]['value_2'] != null) WriteILetterShuffle(setPrev_value2, setLast_value2, section_data[index]['value_2'], textIndex_value2, setTextIndex_value2, 10, 30, NUMBERS)
    },[textIndex_value2])
    



    useEffect(() => {
        setTextIndex_text1(0);
        setTextIndex_text2(0);
        setTextIndex_text3(0);
        setTextIndex_text4(0);
        setTextIndex_text5(0);
        setTextIndex_text6(0);
        setTextIndex_text7(0);
        setTextIndex_text8(0);
        setTextIndex_text9(0);
        setTextIndex_text10(0);
        setTextIndex_text11(0);
        setTextIndex_text12(0);
        setTextIndex_text13(0);
        setTextIndex_text14(0);

        setTextIndex_value1(0);
        setTextIndex_value2(0);
    },[index, active])

    return(
        <div className='tablet:h-[35rem]' ref={ref}>
        <div className= {`mobile-s: pt-10 mobile-s:min-h-[50rem] mobile-s:flex-col mobile-s:justify-start mobile-s:p-0 mobile-s:bg-[#323445] tablet:flex-row tablet:bg-gradient-to-t from-[#232533] to-[#323445] table: h-[20rem] p-20 flex`}>
            
            <div className={`${(active)? 'opacity-100' : 'opacity-0'} mobile-s:justify-start mobile-s:px-6 tablet:pl-12 flex flex-col tablet:basis-1/2 justify-center items-start`}>
                {(section_data[index]['text_1']) && <p className='mobile-s: py-[0.5rem] moble-s: text-[0.9rem] text-base text-slate-300 font-normal'><span>-{Prev_text1}</span><span className='opacity-50'>{Last_text1}</span></p>}
                {(section_data[index]['text_2']) && <h3 className='mobile-s: py-[0.01rem] moble-s: text-[0.9rem] text-xl text-[#FEAD20] font-semibold mt-2'><span>{Prev_text2}</span><span className='opacity-50'>{Last_text2}</span></h3>}
                {(section_data[index]['text_3']) && <h2 className='mobile-s: py-1 mobile-s: text-3xl text-2xl text-white font-semibold'><span>{Prev_text3}</span><span className='opacity-50'>{Last_text3}</span></h2>}
                {(section_data[index]['text_4']) && <p className='text-base text-slate-300 font-normal'><span>{Prev_text4}</span><span className='opacity-50'>{Last_text4}</span></p>}
                {(section_data[index]['link_1']) && <div className='flex justify-center items-center mt-4'>
                    {(section_data[index]['link_1']) && <a href = {section_data[index]['link_1_href']}className='mobile-s:text-[0.9rem] text-md font-semibold text-[#FEAD20]'>{section_data[index]['link_1']}</a>}
                    {section_data[index]['link_1_button'] && <span className='bg-[#FEAD20] h-5 w-5 rounded-full flex justify-center items-center font-bold text-2xl text-white ml-2 rotate-90'> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 320L192 704h639.936z"></path></svg></span>}
                </div>
                }
            </div>

            <div className={`${(active)? 'opacity-100' : 'opacity-0'} mobile-s:justify-start mobile-s: px-6 tablet:pr-[1rem] flex flex-col tablet:basis-1/2 justify-center items-start w-full`}>
                {(section_data[index]['text_5']) &&<h2 className='mobile-s: pt-6 mobile-s:text-[#FEAD20] text-white text-2xl font-medium'><span>{Prev_text5}</span><span className='opacity-50'>{Last_text5}</span></h2>}

                {((section_data[index]['text_6']) ||(section_data[index]['text_7'])) && <div className='mobile-s: full-w mobile-s: pt-6'>
                    {(section_data[index]['text_6']) && <h4 className='text-white text-xl'><span>{Prev_text6}</span><span className='opacity-50'>{Last_text6}</span></h4>}
                    {(section_data[index]['text_7']) && <h3 className='mobile-s: leading-[1.5rem] text-[#FEAD20] text-2xl font-semibold'><span>{Prev_text7}</span><span className='opacity-50'>{Last_text7}</span></h3>}
                </div>}
                
                {((section_data[index]['text_8']) || (section_data[index]['text_9']) || (section_data[index]['text_8']) || (section_data[index]['text_14'])) && 
                <div className='mobile-s: pt-6'>
                    {(section_data[index]['text_8']) && <h4 className='text-white text-xl'><span>{Prev_text8}</span><span className='opacity-50'>{Last_text8}</span></h4>}
                    {(section_data[index]['text_9']) && <h3 className='text-[#FEAD20] text-2xl font-semibold'><span>{Prev_text9}</span><span className='opacity-50'>{Last_text9}</span></h3>}
                    {(section_data[index]['text_14']) && <p className='mobile-s: text-base text-slate-300 font-normal'><span>{Prev_text14}</span><span className='opacity-50'>{Last_text14}</span></p>}
                </div>}

                <div className='mobile-s: pt-6 mobile-s: w-full flex mobile-s:flex-col tablet:flex-row tablet:justify-center justify-start items-start'>
                    
                    <div className='mobile-s:py-1 mobile-s:justify-start tablet:px-3 flex items-center py-5'>
                        {(section_data[index]['value_1']) && <h2 className='mobile-s:text-[2.5rem] tablet:text-[4rem] text-[#FEAD20] text-6xl font-bold mr-2'><span>{Prev_value1}</span><span className='opacity-50'>{Last_value1}</span></h2>}
                        <div className='flex flex-col justify-center items-start'>
                            {(section_data[index]['text_10']) && <label className='mobile-s:text-[1rem] tablet:text-[1.2rem] text-white text-xl font-medium'><span>{Prev_text10}</span><span className='opacity-50'>{Last_text10}</span></label>}
                            {(section_data[index]['text_11']) && <label className='mobile-s:text-[1rem] tablet:text-[1.2rem]  text-white text-xl font-medium -mt-2 '><span>{Prev_text11}</span><span className='opacity-50'>{Last_text11}</span></label>}
                        </div>
                    </div>

                    <div className='mobile-s:py-1 flex items-center justify-start'>
                        <h2 className='mobile-s:text-[2.5rem] text-[#FEAD20] text-6xl font-bold mr-2 tablet:text-[4rem]'><span>{Prev_value2}</span><span className='opacity-50'>{Last_value2}</span></h2>
                        <div className='flex flex-col justify-center items-start'>
                            {(section_data[index]['text_12']) && <label className='mobile-s:text-[1rem] tablet:text-[1.2rem] text-white text-xl font-medium'><span>{Prev_text12}</span><span className='opacity-50'>{Last_text12}</span></label>}
                            {(section_data[index]['text_13']) && <label className='mobile-s:text-[1rem] tablet:text-[1.2rem] text-white text-xl font-medium -mt-2'><span>{Prev_text13}</span><span className='opacity-50'>{Last_text13}</span></label>}
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <a className='text-lg font-semibold text-[#FEAD20]'>{section_data[index]['link_2']}</a>
                    {section_data[index]['link_2_button'] && <span className='bg-[#FEAD20] h-5 w-5 rounded-full flex justify-center items-center font-bold text-2xl text-white ml-2 rotate-90'> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 320L192 704h639.936z"></path></svg></span>}
                </div>

                <div className={`mobile-s: px-6 mobile-s: py-10 w-full flex justify-center items-center bg-[${bg_color}]`}>
                    {(section_data[index]['more']) && <a className='mobile-s:text-[0.8rem] text-md font-semibold text-[#FEAD20]'>{section_data[index]['more']}</a>}
                    {section_data[index]['more_button'] && <span className='bg-[#FEAD20] h-5 w-5 rounded-full flex justify-center items-center font-bold text-2xl text-white ml-2 rotate-180'> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 320L192 704h639.936z"></path></svg></span>}
            </div>
            </div>
        </div>
        
            
            
            
            <div className='hidden'>
                
                    {(section_data[index]['table']['cols'] == 1)? <div className='flex font-bold text-xl h-[3rem]'><div className={'flex justify-center items-center bg-[#FEAD20] text-white'}>{section_data[index]['table']['header'][0]}</div></div> :
                    (section_data[index]['table']['cols'] == 2) ? <div className='flex font-bold text-xl h-[3rem]'><div className={'basis-1/2 flex justify-center items-center bg-[#FEAD20] text-white'}>{section_data[index]['table']['header'][0]}</div> <div className='basis-1/2 flex justify-center items-center bg-white text-[#FEAD20]'>{section_data[index]['table']['header'][1]}</div></div>:
                     (section_data[index]['table']['cols']) && <div className='flex font-bold text-xl'><div className={'basis-1/3 flex justify-center items-center h-[3rem] bg-[#FEAD20] text-white'}>{section_data[index]['table']['header'][0]}</div> <div className='basis-1/3 flex justify-center items-center bg-white text-[#FEAD20]'>{section_data[index]['table']['header'][1]}</div><div className='basis-1/3 flex justify-center items-center bg-[#FEAD20] text-white'>{section_data[index]['table']['header'][2]}</div></div>                    
                    }

                    {
                        section_data[index]['table']['data'].map(
                            data => (section_data[index]['table']['data'].indexOf(data)%2 == 0)? 
                            (section_data[index]['table']['cols'] == 1) ? 
                            <div className='flex font-semibold text-[1rem] h-[3rem]'>
                                <div className='flex justify-center items-center bg-[#323445] text-[#FEAD20]'>{data[0]}</div>
                            </div>
                            :
                            (section_data[index]['table']['cols'] == 2) ?
                            <div className='flex font-semibold text-[1rem] h-[3rem]'>
                                <div className='basis-1/2 flex justify-center items-center bg-[#323445] text-[#FEAD20]'>{data[0]}</div>
                                <div className='basis-1/2 flex justify-center items-center bg-[#323445] text-white'>{data[1]}</div>
                            </div>
                            :
                            <div className='flex font-semibold text-[1rem] h-[3rem]'>
                                <div className='basis-1/3 flex justify-center items-center bg-[#323445] text-[#FEAD20]'>{data[0]}</div>
                                <div className='basis-1/3 flex justify-center items-center bg-[#323445] text-white'>{data[1]}</div>
                                <div className='basis-1/3 flex justify-center items-center bg-[#323445] text-[#FEAD20]'>{data[2]}</div>
                            </div>
             
                            :
                            
                            (section_data[index]['table']['cols'] == 1) ? 
                            <div className='flex font-semibold text-[1rem] h-[3rem]'>
                                <div className='flex justify-center items-center  text-[#FEAD20]'>{data[0]}</div>
                            </div>

                            :
                            (section_data[index]['table']['cols'] == 2) ?
                            <div className='flex font-semibold text-[1rem] h-[3rem]'>
                                <div className='basis-1/2 flex justify-center items-center  text-[#FEAD20]'>{data[0]}</div>
                                <div className='basis-1/2 flex justify-center items-center text-white'>{data[1]}</div>
                            </div>

                            :

                            <div className='flex font-semibold text-[1rem] h-[3rem]'>
                                <div className='basis-1/3 flex justify-center items-center  text-[#FEAD20]'>{data[0]}</div>
                                <div className='basis-1/3 flex justify-center items-center text-white'>{data[1]}</div>
                                <div className='basis-1/3 flex justify-center items-center  text-[#FEAD20]'>{data[2]}</div>
                            </div>

                        )
                    }
                
            </div>
            
            {(section_data[index]['table']['data'].length % 2 == 1) && <div className='flex font-semibold text-xl h-[3rem] hidden'></div>}


        </div>
    )
    
}