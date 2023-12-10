import React from "react";

export default function SidebarItem({menu_func, tab_name, selected, reference}){

    const action = () =>{
        reference.current?.scrollIntoView({ behavior: 'smooth' });
        menu_func(false);
    }

    return(
        <div className="flex justify-center items-center font-medium text-xl pb-4 cursor-pointer" onClick={() => action()}>
            {(selected)? <div className="bg-[#FFD845] rounded-full w-2 h-2 mt-1 mr-4"></div> : <div className="w-1 h-1 mt-1"></div>}
            {(selected)? <a className="text-white">{tab_name}</a> :<a className="text-white opacity-50">{tab_name}</a>}
        </div>
    )
}