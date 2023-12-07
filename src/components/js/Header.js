import React from "react";
import Logo from "./Logo";
import HeaderTabs from "./HeaderTabs";
import MenuButton from "./MenuButton";
import ThemeButton from "./ThemeButton";

export default function Header({set_menu_clicked, menu_clicked}){
    return(
        <div className='bg-[#323445] w-full flex justify-between tablet:justify-between items-center fixed p-3 z-10'>
            <Logo />
            <HeaderTabs />
            <MenuButton set_menu_clicked = {set_menu_clicked} menu_clicked = {menu_clicked}/>
        </div>
    )
}