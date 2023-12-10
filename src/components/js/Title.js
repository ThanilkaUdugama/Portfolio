import React from "react";

export default function Title({title, bg_color}){
    return(
        <div className= {`section-header bg-[${bg_color}] flex flex-col justify-center items-center font-bold text-white text-4xl py-10`}>
          <div className="flex items-end">
          <h2 className="mobile-s:text-[1.2rem] mobile-m:text-[1.4rem] mobile-l:text-[1.6rem] tablet:text-[2rem]">{title}</h2>
          <span className="mobile-s:w-[0.4rem] mobile-s:h-[0.4rem] mobile-s:mb-[0.7rem] mobile-s:ml-[0.5rem] bg-[#FABE57]"></span>
          </div>
        </div>
    )
}