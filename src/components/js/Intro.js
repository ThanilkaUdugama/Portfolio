import React from "react";
import IntroLeft from "./IntroLeft";
import IntroRight from "./IntroRight";

export default function Intro({code, triggers}){
    return(
        <div className='flex w-full flex-col tablet:flex-row pt-14 md:pt-20 xl:pt-24 2xl:pt-44'>
            <IntroLeft active = {code == triggers}/>
            <IntroRight active = {code == triggers}/>    
        </div>
    )
}