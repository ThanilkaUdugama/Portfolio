import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export default function FormItem({field, name, value, onChange, type}){
    return(
        <div>
            <div className="flex flex-col items-start pb-2 justify-center w-full">
                    <label className="mobile-s:text-[0.8rem] mobile-s:py-[0.005rem] tablet:text-[1rem] font-semibold text-white bg-[#FEAD20] px-3 py-1 rounded text-lg my-2 outline outline-4 outline-[#232533] -mb-2 -ml-2 z-10">{field}</label>
                    {(type == 'textarea') ? <textarea onChange={(e) => onChange(e)} name= {name} value = {value} className="mobile-s:h-[16rem] w-full rounded focus:border-none bg-[#323445] text-white outline-none resize-none"></textarea>: <input name = {name} onChange={(e) => onChange(e)} value = {value} className=" rounded h-[1.8rem] w-full focus:border-none bg-[#323445] text-white outline-none" type={type}></input>}
                    
                </div>
        </div>
    )
}