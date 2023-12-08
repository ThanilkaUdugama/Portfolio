import React from 'react';
import SidebarItem from './SidebarItem';
export default function Sidebar({activity, references}){
    return(
        <div className='bg-[#323445] w-full z-10 fixed flex flex-col mt-16 pb-5 transition sidebar sidebar-closed tablet:hidden'>
            <SidebarItem tab_name="Introduction" selected={activity['intro']} reference = {references[0]}/>
            <SidebarItem tab_name="Qualifications" selected={activity['qualifications']} reference = {references[1]}/>
            <SidebarItem tab_name="Contact" selected={activity['contact']} reference = {references[2]}/>
        </div>
    )
}