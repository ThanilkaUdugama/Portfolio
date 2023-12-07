import React from "react";


export default function Intro(){
    return(
        <div className='flex w-full flex-col md:flex-row'>
            <div className='bg-green-500 w-full md:w-3/5 h-96 md:h-100 2xl:h-120'>
                 Image
            </div>
        <div className='bg-blue-500 w-full md:w-2/5 h-96 md:h-100 2xl:h-120'>
                Introduction
        </div>
      </div>
    )
}