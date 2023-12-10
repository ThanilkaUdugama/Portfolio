import React from 'react';
export default function InfoSectionContentRight({bg_color, index, code, section_data}){
    return(
        <div>
        <div className= {`mobile-s: pt-10 mobile-s:flex-col mobile-s:items-center mobile-s:p-0 mobile-s:bg-[#323445] tablet:flex-row tablet:bg-gradient-to-t from-[#232533] to-[#323445] p-20 flex`}>
            
            <div className='mobile-s:px-6 tablet:pl-12 flex flex-col basis-1/2 justify-center items-start'>
                {(section_data[index]['text_1']) && <p className='mobile-s: py-[0.5rem] moble-s: text-[0.9rem] text-base text-slate-300 font-normal'>- {section_data[index]['text_1']}</p>}
                {(section_data[index]['text_2']) && <h3 className='mobile-s: py-[0.01rem] moble-s: text-[0.9rem] text-xl text-[#FEAD20] font-semibold mt-2'>{section_data[index]['text_2']}</h3>}
                {(section_data[index]['text_3']) && <h2 className='mobile-s: py-1 mobile-s: text-3xl text-2xl text-white font-semibold'>{section_data[index]['text_3']}</h2>}
                {(section_data[index]['text_4']) && <p className='text-base text-slate-300 font-normal'>{section_data[index]['text_4']}</p>}
                {(section_data[index]['link_1']) && <div className='flex justify-center items-center mt-4'>
                    {(section_data[index]['link_1']) && <a href = {section_data[index]['link_1_href']}className='mobile-s:text-[0.9rem] text-md font-semibold text-[#FEAD20]'>{section_data[index]['link_1']}</a>}
                    {section_data[index]['link_1_button'] && <span className='bg-[#FEAD20] h-5 w-5 rounded-full flex justify-center items-center font-bold text-2xl text-white ml-2 rotate-90'> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 320L192 704h639.936z"></path></svg></span>}
                </div>
                }
            </div>

            <div className='mobile-s: px-6 mobile-s:bg-gradient-to-t from-[#232533] to-[#323445] tablet:pr-12 flex flex-col basis-1/2 justify-center items-start w-full'>
                {(section_data[index]['text_5']) &&<h2 className='mobile-s: pt-6 mobile-s:text-[#FEAD20] text-white text-2xl font-medium'>{section_data[index]['text_5']}</h2>}

                {((section_data[index]['text_6']) ||(section_data[index]['text_7'])) && <div className='mobile-s: full-w mobile-s: pt-6'>
                    {(section_data[index]['text_6']) && <h4 className='text-white text-xl'>{section_data[index]['text_6']}</h4>}
                    {(section_data[index]['text_7']) && <h3 className='mobile-s: leading-[1.5rem] text-[#FEAD20] text-2xl font-semibold'>{section_data[index]['text_7']}</h3>}
                </div>}
                
                {((section_data[index]['text_8']) || (section_data[index]['text_9']) || (section_data[index]['text_8']) || (section_data[index]['text_14'])) && 
                <div className='mobile-s: pt-6'>
                    {(section_data[index]['text_8']) && <h4 className='text-white text-xl'>{section_data[index]['text_8']}</h4>}
                    {(section_data[index]['text_9']) && <h3 className='text-[#FEAD20] text-2xl font-semibold'>{section_data[index]['text_9']}</h3>}
                    {(section_data[index]['text_14']) && <p className='mobile-s: text-base text-slate-300 font-normal'>{section_data[index]['text_14']}</p>}
                </div>}

                <div className='mobile-s: pt-6 mobile-s: w-full flex mobile-s:flex-col tablet:flex-row tablet:justify-center justify-start items-start'>
                    
                    <div className='mobile-s:py-1 mobile-s:justify-start tablet:px-3 flex items-center py-5'>
                        {(section_data[index]['value_1']) && <h2 className='mobile-s:text-[2.5rem] text-[#FEAD20] text-6xl font-bold mr-2'>{section_data[index]['value_1']}</h2>}
                        <div className='flex flex-col justify-center items-start'>
                            {(section_data[index]['text_10']) && <label className='mobile-s:text-[1rem] text-white text-xl font-medium'>{section_data[index]['text_10']}</label>}
                            {(section_data[index]['text_11']) && <label className='mobile-s:text-[1rem] text-white text-xl font-medium -mt-2'>{section_data[index]['text_11']}</label>}
                        </div>
                    </div>

                    <div className='mobile-s:py-1 flex items-center justify-start'>
                        <h2 className='mobile-s:text-[2.5rem] text-[#FEAD20] text-6xl font-bold mr-2'>{section_data[index]['value_2']}</h2>
                        <div className='flex flex-col justify-center items-start'>
                            {(section_data[index]['text_12']) && <label className='mobile-s:text-[1rem] text-white text-xl font-medium'>{section_data[index]['text_12']}</label>}
                            {(section_data[index]['text_13']) && <label className='mobile-s:text-[1rem] text-white text-xl font-medium -mt-2'>{section_data[index]['text_13']}</label>}
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
                            <div className='flex font-semibold text-xlh-[3rem]'>
                                <div className='flex justify-center items-center bg-[#232533] text-[#FEAD20]'>{data[0]}</div>
                            </div>
                            :
                            (section_data[index]['table']['cols'] == 2) ?
                            <div className='flex font-semibold text-xl h-[3rem]'>
                                <div className='basis-1/2 flex justify-center items-center bg-[#232533] text-[#FEAD20]'>{data[0]}</div>
                                <div className='basis-1/2 flex justify-center items-center bg-[#232533] text-white'>{data[1]}</div>
                            </div>
                            :
                            <div className='flex font-semibold text-xl h-[3rem]'>
                                <div className='basis-1/3 flex justify-center items-center bg-[#232533] text-[#FEAD20]'>{data[0]}</div>
                                <div className='basis-1/3 flex justify-center items-center bg-[#232533] text-white'>{data[1]}</div>
                                <div className='basis-1/3 flex justify-center items-center bg-[#232533] text-[#FEAD20]'>{data[2]}</div>
                            </div>
             
                            :
                            
                            (section_data[index]['table']['cols'] == 1) ? 
                            <div className='flex font-semibold text-xl h-[3rem]'>
                                <div className='flex justify-center items-center  text-[#FEAD20]'>{data[0]}</div>
                            </div>

                            :
                            (section_data[index]['table']['cols'] == 2) ?
                            <div className='flex font-semibold text-xl h-[3rem]'>
                                <div className='basis-1/2 flex justify-center items-center  text-[#FEAD20]'>{data[0]}</div>
                                <div className='basis-1/2 flex justify-center items-center text-white'>{data[1]}</div>
                            </div>

                            :

                            <div className='flex font-semibold text-xl h-[3rem]'>
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