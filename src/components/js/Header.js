import React from "react";
import Logo from "./Logo";
import HeaderTabs from "./HeaderTabs";
import MenuButton from "./MenuButton";
import ThemeButton from "./ThemeButton";

export default function Header(){
    return(
        <div className='bg-red-500 w-full h-14 flex justify-between tablet:justify-around fixed'>
            <MenuButton />
            <Logo />
            <HeaderTabs />
            <ThemeButton />
        </div>
    )
}