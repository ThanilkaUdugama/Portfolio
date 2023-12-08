import React from "react";

export default function HeaderTab({tab_name, selected, reference}){
    return(
        <div className="flex flex-col justify-center items-center font-medium cursor-pointer" onClick={() => reference.current?.scrollIntoView({ behavior: 'smooth' })}>
            {(selected)? <a className="text-white">{tab_name}</a> :<a className="text-white opacity-50">{tab_name}</a>}
            {(selected)? <div className="bg-[#FFD845] rounded-full w-1 h-1 mt-1"></div> : <div className="w-1 h-1 mt-1"></div>}
        </div>
    )
}