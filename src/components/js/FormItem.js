import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export default function FormItem({field, color, name, value, onChange, type}){
    console.log(color)
    return(
        <div>
            
            <div className="flex flex-col items-start pb-2 justify-center w-full">
                    <label style={{'background-color' : color}} className= {`duration-0 ml-1 mobile-s:text-[0.8rem] mobile-s:py-[0.005rem] tablet:text-[1rem] font-semibold text-white px-3 rounded-t-md text-lg mt-4 mb-[0.1rem] z-10`}>{field}</label>
                    {(type == 'textarea') ? <textarea style={{'outline-color' : color}} onChange={(e) => onChange(e)} name= {name} value = {value} className="duration-0 mt-[0.1rem] outline-[#FEAD20] outline-3 mobile-s:h-[16rem] w-full rounded focus:border-none bg-[#323445] text-white outline-none resize-none"></textarea>: <input style={{'outline-color' : color}} name = {name} onChange={(e) => onChange(e)} value = {value} className="outline-[#FEAD20] outline-3 rounded h-[1.8rem] w-full focus:border-none bg-[#323445] text-white outline-none" type={type}></input>}
                    
                </div>
        </div>
    )
}