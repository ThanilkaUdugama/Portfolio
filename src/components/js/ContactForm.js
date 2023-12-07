import React from "react";
import ContactTitle from './Title.js'

export default function ContactForm(){
    return(
        <div>
            <ContactTitle title = "CONTACT ME" />
            <div className='bg-indigo-500 col-span-8 h-96'>
                Contact me form
            </div>
        </div>
    )
}