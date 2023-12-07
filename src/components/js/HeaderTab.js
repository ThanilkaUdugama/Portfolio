import React from "react";

export default function HeaderTab({tab_name, path, selected}){
    return(
        <div className="flex flex-col justify-center items-center font-medium">
            {(selected)? <a className="text-white" href={path}>{tab_name}</a> :<a className="text-white opacity-50" href={path}>{tab_name}</a>}
            {(selected)? <div className="bg-[#FFD845] rounded-full w-1 h-1 mt-1"></div> : <div className="w-1 h-1 mt-1"></div>}
        </div>
    )
}