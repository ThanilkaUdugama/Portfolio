import React from "react";

export default function Title({title, bg_color}){
    return(
        <div className= {`section-header bg-[${bg_color}] flex flex-col justify-center items-center font-bold text-white text-4xl py-10`}>
          <div className="flex items-end">
          <h2>{title}</h2>
          <span className="w-3 h-3 m-2 bg-[#FABE57]"></span>
          </div>
        </div>
    )
}