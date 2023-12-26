import React from "react";

export default function MenuButton({set_menu_clicked, menu_clicked}){
    return(
        <div className="tablet:hidden menu-button cursor-pointer" onClick = {() => set_menu_clicked(!menu_clicked)}>
            <div id = "f1" className="bg-white w-7 h-0.5 rounded-lg mb-1.5 transistion duration-300"></div>
            <div id = "f2" className="bg-white w-7 h-0.5 rounded-lg mb-1.5"></div>
            <div id = "f3" className="bg-white w-7 h-0.5 rounded-lg transistion duration-300"></div>
        </div>
    )
}