import React from "react";
import HeaderTab from "./HeaderTab";

export default function HeaderTabs(){
    return(
    <div className="basis-1/2 justify-end space-x-4 hidden tablet:flex">
        <HeaderTab />
        <HeaderTab />
        <HeaderTab />
        <HeaderTab />
    </div>
    )
}