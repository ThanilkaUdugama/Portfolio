import React from "react";
import User from '../../images/user.png'

export default function IntroLeft(){
    return(
        <div className='bg-[#323445] w-full tablet:w-3/5 h-96 tablet:h-100 flex items-end'>
                <img className="grayscale h-96 tablet:h-100" src = {User}></img>
        </div>
    )
}