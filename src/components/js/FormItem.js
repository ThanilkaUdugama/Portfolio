import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export default function FormItem({field, type}){
    return(
        <div>
            <div className="flex flex-col items-start pb-2 justify-center w-full">
                    <label className="font-semibold text-white bg-[#FEAD20] px-3 py-1 rounded text-lg my-2 outline outline-4 outline-[#232533] -mb-2 -ml-2 z-10">{field}</label>
                    {(type == 'textarea') ? <textarea className="rounded h-[1.5rem] focus:border-none bg-[#323445] w-[32rem] h-[8rem] text-white outline-none resize-none"></textarea>: <input className="rounded h-[1.8rem] focus:border-none bg-[#323445] w-[32rem] text-white outline-none" type={type}></input>}
                    
                </div>
        </div>
    )
}