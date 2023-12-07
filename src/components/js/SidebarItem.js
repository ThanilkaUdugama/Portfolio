import React from "react";

export default function SidebarItem({tab_name, path, selected}){
    return(
        <div className="flex justify-center items-center font-medium text-xl pb-4">
            {(selected)? <div className="bg-[#FFD845] rounded-full w-2 h-2 mt-1 mr-4"></div> : <div className="w-1 h-1 mt-1"></div>}
            {(selected)? <a className="text-white" href={path}>{tab_name}</a> :<a className="text-white opacity-50" href={path}>{tab_name}</a>}
        </div>
    )
}