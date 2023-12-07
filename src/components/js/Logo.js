import React from "react";
import logo from "../../images/logo.png"

export default function Logo(){
    return (
        <div className="flex flex-start justify-center items-center">
            <img className = "w-10 tabelt:w-12" src = {logo}></img>
        </div>
    )    
}