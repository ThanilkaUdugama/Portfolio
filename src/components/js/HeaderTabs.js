import React from "react";
import HeaderTab from "./HeaderTab";

export default function HeaderTabs({activity, references}){
    return(
    <div className="justify-end space-x-4 hidden tablet:flex tablet:relative p-2 mr-10">
        <HeaderTab tab_name="Introduction" selected = {activity['intro']} reference = {references[0]}/>
        <HeaderTab tab_name="Qualifications" selected = {activity['qualifications']} reference = {references[1]}/>
        <HeaderTab tab_name="Skills" selected = {activity['skills']} reference = {references[2]}/>
        <HeaderTab tab_name="Contact" selected = {activity['contact']} reference = {references[3]}/>
    </div>
    )
}