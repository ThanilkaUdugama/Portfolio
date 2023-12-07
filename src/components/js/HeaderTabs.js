import React from "react";
import HeaderTab from "./HeaderTab";

export default function HeaderTabs(){
    return(
    <div className="justify-end space-x-4 hidden tablet:flex tablet:relative p-2 mr-10">
        <HeaderTab tab_name="Introduction" path="#introduction" selected = {true}/>
        <HeaderTab tab_name="Qualifications" path="#qualification" selected = {false}/>
        <HeaderTab tab_name="Services" path="#services" selected = {false}/>
        <HeaderTab tab_name="Contact" path="#contact" selected = {false}/>
    </div>
    )
}