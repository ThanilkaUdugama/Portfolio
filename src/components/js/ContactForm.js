import React from "react";
import ContactTitle from './Title.js'

export default function ContactForm({bg_color}){
    return(
        <div>
            <ContactTitle title = "CONTACT ME" bg_color={bg_color} />
            <div className='bg-indigo-500 col-span-8 h-96'>
                Contact me form
            </div>
        </div>
    )
}